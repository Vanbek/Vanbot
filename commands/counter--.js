module.exports = {
    action: function (message, args) {
        var sqlite3 = require('sqlite3').verbose();
        var file = "./vanbotDB";
        var db = new sqlite3.Database(file);
        const outputModule = require("../bot.js");
        output = "";

        if (args.length === 2) {
            var found = 0;

            db.all("SELECT name FROM counters WHERE guild = " + message.guild.id + "", function (err, rows) {
                rows.forEach(function (row) {
                    if (row.name === args[1]) { found = 1; }
                })
                if (found == 1) {
                    var stmt = db.prepare("SELECT count FROM counters WHERE name=(?) AND guild=(?)");
                    stmt.get(args[1], message.guild.id, function (err, row) {
                        var reply = (row.count);

                        reply--;

                        var stmt = db.prepare("UPDATE counters SET count=(?) WHERE name=(?) AND guild=(?)");
                        stmt.run(reply, args[1], message.guild.id);
                        stmt.finalize();
                        output = 'Removed';
                        outputModule.sendText(message, output);
                    });
                } else {
                    output = "I don\'t think that counter exists...";
                    outputModule.sendText(message, output);
                }
            });
        } else {
            output = "Incorrect number of arguments. Arguments are seperated by spaces. Append only the counter name";
            outputModule.sendText(message, output);
        }
    }
}