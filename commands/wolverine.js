module.exports = {
    action: function (message, args, trigger, privRole) {
        var Jimp = require("jimp");

            Jimp.read("./images/wolverine.png", function (err, background) {
                if (err) throw err;
                Jimp.read("./images/backdrop1.png", function (err, backdrop) {
                    if (err) throw err;
                    Jimp.read(message.author.avatarURL, function (err, image) {
                        if (err) throw err;
    
                        image.resize(246, 308);
                        backdrop.composite(image, 132, 375).composite(background, 0, 0).write("./images/result.png", printMeme);
                    });
                });
            });

        function printMeme() {
            let output = ("images/result.png");
            const outputModule = require("../bot.js");
			outputModule.sendFile(message, output);
        }
    }
}