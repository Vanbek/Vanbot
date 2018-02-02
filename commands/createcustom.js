module.exports = {
	action: function (message, args) {
		var sqlite3 = require('sqlite3').verbose();
		var file = "./vanbotDB";
		var db = new sqlite3.Database(file);
		const outputModule = require("../bot.js");
		output = "";

		if (args.length === 3) {
			var stmt = db.prepare("INSERT OR IGNORE INTO commands(command, return, guild) VALUES (?,?,?)");
			stmt.run(args[1], args[2], message.guild.id);
			stmt.finalize();

			output = "Command Added";
			outputModule.sendText(message, output);
		} else {
			output = "Incorrect number of arguments. Arguments are seperated by spaces. Both your command and return URL must be one word (no spaces)";
			outputModule.sendText(message, output);
		}
	}
}