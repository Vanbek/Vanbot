module.exports = {
    action: function (message, args) {
		const outputModule = require("../bot.js");
        let output = "";

        if (args.length === 1) {//if no question
            output = "You didn't ask a question...";
        }//if no question
        else {//else       	
        var i = Math.floor(Math.random() * 100);
        var j = Math.floor(Math.random()*4);

        switch(j){
            case 0: output = "Hmmm, I'd give a "+i+" out of 100 on that one"; break;
            case 1: output = "Hard to say... I'd go with "+i+" out of 100"; break;
            case 2: output = "Easy. That's a "+i+" out of 100 in my books"; break;
            case 3: output = "Undoubtedly that's a "+i+" out of 100"; break;
        }
    }     
        outputModule.sendText(message, output);
    }
}