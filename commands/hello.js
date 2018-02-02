module.exports = {
    action: function(message, args){
        const outputModule = require("../bot.js");
        let output = ('Greetings, ' + message.author.username);
        outputModule.sendText(message, output);
    }
}