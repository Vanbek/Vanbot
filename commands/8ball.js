module.exports = {
    action: function (message, args) {
        const outputModule = require("../bot.js");
        let output = "";

        if (args.length === 1) {//if no question
            output = "You didn't ask a question...";
        }//if no question
        else {//else
            let j = Math.floor(Math.random() * 8);
            switch (j) {//switch
                case 0: output = "Yes"; break;
                case 1: output = "For sure, my dude"; break;
                case 2: output = "Meh, probably"; break;
                case 3: output = "Hard no"; break;
                case 4: output = "Nope"; break;
                case 5: output = "Math.random says no"; break;
                case 6: output = "Fuck if I know"; break;
                case 7: output = "Maybe? IDK lol"; break;
            }//switch
        }//else	

        outputModule.sendText(message, output);
    }
}