module.exports = {
    action: function (message, args) {
		const outputModule = require("../bot.js");
        let output = "";
        	
		var i = Math.floor(Math.random() * 16);
		switch (i) {
			case 0: output = "https://i.imgur.com/oPIEjtA.gif"; break;
			case 1: output = "https://i.imgur.com/TmjFAIn.gif"; break;
			case 2: output = "https://i.imgur.com/22eOqjO.gif"; break;
			case 3: output = "https://i.imgur.com/fKGapsX.gif"; break;
			case 4: output = "https://i.imgur.com/lFje0mw.gif"; break;
			case 5: output = "https://i.imgur.com/dNagorM.gif"; break;
			case 6: output = "https://i.imgur.com/ce7Okth.gif"; break;
			case 7: output = "https://i.imgur.com/8YbmJAq.gif"; break;
			case 8: output = "https://i.imgur.com/onmlVGH.gif"; break;
			case 9: output = "https://i.imgur.com/Njk8OC0.gif"; break;
			case 10: output = "https://i.imgur.com/THVvEO8.gif"; break;
			case 11: output = "https://i.imgur.com/anYD1Vm.gif"; break;
			case 12: output = "https://i.imgur.com/kh78L86.gif"; break;
			case 13: output = "https://i.imgur.com/cAEI1B9.gif"; break;
			case 14: output = "https://i.imgur.com/zGyiwQj.gif"; break;
			case 15: output = "https://i.imgur.com/HwasTsq.gif"; break;
		}

        outputModule.sendText(message, output);
    }
}