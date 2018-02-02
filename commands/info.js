module.exports = {
    action: function (message, args, trigger, privRole) {
        var fs = require('fs');
        var obj = JSON.parse(fs.readFileSync('commands.json', 'utf8'));
        let config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
        const outputModule = require("../bot.js");
        let output = "I don't think that's a real command";;

        if (args.length === 1) {//if no command
            output = 'You didn\'t specify a command...';
        }//if no command
        else if (args.length === 2) {

            for (let i = 0; i < obj.commands.length; i++) {//traverse JSON
                if (obj.commands[i].name == args[1]) {//if we found it in the list

                    if (obj.commands[i].privileged == 0) {
                        output = args[1] + ": " + obj.commands[i].info;
                    } else {
                        output = args[1] + ": " + obj.commands[i].info + " (" + config.configuration[0].privileged_role + " only)";
                    }
                } 
            }//traverse JSON
        }
        else {//else
            output = 'Incorrect number of arguments';
        }//else

        outputModule.sendText(message, output);
    }
}