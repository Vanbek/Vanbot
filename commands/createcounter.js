module.exports = {
	action: function (message, args) {
		var sqlite3 = require('sqlite3').verbose();
		var file = "./vanbotDB";
		var db = new sqlite3.Database(file);
		const outputModule = require("../bot.js");
		output = "";

		var startVal = parseInt(args[2]);
		if (args.length === 3 && isNaN(startVal) === false) {
			var stmt = db.prepare("INSERT OR IGNORE INTO counters(name, count, guild) VALUES (?,?,?)");
			stmt.run(args[1], startVal, message.guild.id);
			stmt.finalize();
			
			output = "Counter Added";
			outputModule.sendText(message, output);
		} else {
			output = "Incorrect number of arguments or incorrect argument type. Arguments are seperated by spaces. Your starting value must be an integer. Your counter name should be one word (no spaces)";
			outputModule.sendText(message, output);
		}
	}
}