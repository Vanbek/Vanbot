# Vanbot-Github
Vanbot Discord bot

This is a pretty basic Discord bot with a few features. If you want to use this thing feel free to add and delete commands. Each command is contained in a .js file under /commands that is called by bot.js by name. Each command also has a commands.json entry tied to it with a description of the command and required privilege level to run the command. 

Default commands:

hello: 		returns a friendly greeting

help: 		provides a list of commands

info: 		provides information about a specific command

8ball: 		answers a yes or no question

rate: 		rates something out of 100

counter++: 	increments the specified counter

counter--: 	decrements the specified counter

cry: 		links a random GIF of a crying anime person

smug: 		creates a "smug aura" meme using your profile picture

wolverine: 	creates a Wolverine meme using your profile picture

custom: 	executes custom commands

createcustom: 	creates a custom command

deletecustom: 	deletes custom command

createcounter: 	creates a new counter

deletecounter: 	deletes counter

checkcounter: 	returns the specified counters current value


How to get it working: 

1. Run create_db.js to create the database (node creat_db.js)
2. Insert the token of the Discord bot account you want running the app in config.js under token. (You can make changes to other settings here as well)
3. Run or daemonize bot.js (node bot.js) or (pm2 start bot.js) to get started (control+c or pm2 stop bot.js to turn it off)
