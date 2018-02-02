module.exports = {
    action: function (message, args) {
        var sqlite3 = require('sqlite3').verbose();
        var file = "./vanbotDB";
        var db = new sqlite3.Database(file);
        const outputModule = require("../bot.js");
        output = "";

        if (args.length === 2) {

            var found = 0;
            db.all("SELECT command FROM commands WHERE guild = " + message.guild.id + "", function (err, rows) {
                rows.forEach(function (row) {
                    if (row.command === args[1]) { found = 1; }
                })
                if (found == 1) {
                    var stmt = db.prepare("SELECT return FROM commands WHERE command=(?) AND guild=(?)");
                    stmt.get(args[1], message.guild.id, function (err, row) {
                        var reply = (row.return);
                        output=(reply);
                        outputModule.sendText(message, output);
                    });
                    stmt.finalize();
                    db.close();
                } else {
                    output=("I don\'t think that\'s a real command...");
                    outputModule.sendText(message, output);
                }
            });
        } else {
            output=("Incorrect number of arguments");
            outputModule.sendText(message, output);
        }
    }
}