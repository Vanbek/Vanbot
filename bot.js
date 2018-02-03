const Discord = require('discord.js');
const client = new Discord.Client();

var fs = require('fs');
var command_list = JSON.parse(fs.readFileSync('commands.json', 'utf8'));
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

function pluck(array) {
	return array.map(function (item) { return item["name"]; });
}

function hasRole(mem, role) {//checks if user has appropriate role
	if (pluck(mem.roles).includes(role)) {
		return 1;
	} else {
		return 0;
	}
}

module.exports = {//message functions that can be called from other files
	sendFile: function (message, output) {
		message.channel.sendFile(output);
	},
	sendText: function (message, output) {
		message.channel.send(output);
	}
}

client.on('ready', () => {//on startup
	console.log('Goliath Online');
	client.user.setGame("try " + config.configuration[0].trigger + "help");
});

client.on('message', message => {
	var args = message.content.split(/[ ]+/);

	if (args[0].toLowerCase().startsWith(config.configuration[0].trigger)) {
		let temp = args[0].substring(config.configuration[0].trigger.length, args[0].length);
		args[0] = temp.toLocaleLowerCase();

		var found = 0;
		var privReq = 1;

		for (let i = 0; i < command_list.commands.length; i++) {
			if (command_list.commands[i].name === args[0]) {
				found = 1;
				privReq = command_list.commands[i].privileged;
			}
		}

		if (found == 1) {//was the command a real command?
			if (privReq == 1) {//is there are privilege requirement on the command?
				var role = hasRole(message.member, config.configuration[0].privileged_role);
				if (role == privReq) {//if they do have permission...
					runCommand();
				} else {//if they don't have permission...
					console.log("You don't have the right role to run that command")
				}
			} else {//if there is no privilege requirement just run the damn thing
				runCommand();
			}
		}

		function runCommand() {
			const commandModule = require('./commands/' + args[0]);
			commandModule.action(message, args);
		}
	}

	if (message.content.toLocaleLowerCase().includes("cyber")) {//cyber alert
		message.channel.send(':rotating_light: C Y B E R :rotating_light:');
	}//cyber alert
});

client.login(config.configuration[0].token);

