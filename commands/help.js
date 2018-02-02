module.exports = {
    action: function (message, args) {
        let fs = require('fs');
        let obj = JSON.parse(fs.readFileSync('commands.json', 'utf8'));
        let config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

        let sqlite3 = require('sqlite3').verbose();
        let file = "vanbotDB";
        let db = new sqlite3.Database(file);
        const outputModule = require("../bot.js");

        let regList = 'Public Commands: ';
        let privList = 'Privileged Commands: ';

        for (let i = 0; i < obj.commands.length; i++) {
            if (obj.commands[i].privileged === 0) {
                regList += config.configuration[0].trigger + obj.commands[i].name + ", ";
            } else {
                privList += config.configuration[0].trigger + obj.commands[i].name + ", ";
            }
        }
        let regList1 = regList.substr(0, regList.length - 2);
        outputModule.sendText(message, regList1);

        let privList1 = privList.substr(0, privList.length - 2);
        outputModule.sendText(message, privList1);

        let customList = 'Custom Commands: ';
        db.all("SELECT command FROM commands WHERE guild = " + message.guild.id + "", function (err, rows, step2) {
            rows.forEach(function (row) {
                customList += (row.command + ', ');
            })
            var customList1 = customList.substr(0, customList.length - 2);
            outputModule.sendText(message, customList1);
        });


        let counterList = 'Custom Counters: '
        db.all("SELECT name FROM counters WHERE guild = " + message.guild.id + "", function (err, rows) {
            rows.forEach(function (row) {
                counterList += (row.name + ', ');
            })
            var counterList1 = counterList.substr(0, counterList.length - 2);
            outputModule.sendText(message, counterList1);
        });
    }
}
