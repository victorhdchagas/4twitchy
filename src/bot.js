const tmi = require('tmi.js');
const config = require('../config/index');



function twitchManager(io) {
    // Define configuration options
    const opts = {
        identity: {
            username: config.twitch.username,
            password: config.twitch.password
        },
        channels: config.twitch.channels
    };
    // Create a client with our options
    const client = new tmi.client(opts);

    // Register our event handlers (defined below)
    client.on('message', onMessageHandler);
    client.on('connected', onConnectedHandler);

    // Connect to Twitch:
    client.connect();

    io.on('connection', onSocketConnection)

    function onSocketConnection(socket) {
        console.log("\t novo usuario conectado")
    }
    // Called every time a message comes in


    // Function called when the "dice" command is issued
    function rollDice() {
        const sides = 6;
        return Math.floor(Math.random() * sides) + 1;
    }
    // Called every time the bot connects to Twitch chat
    function onConnectedHandler(addr, port) {

        console.log(`* Connected to ${addr}:${port}`);
    }

    function onMessageHandler(target, context, msg, self) {
        console.log('onMessageHandler')
        if (self) { return; } // Ignore messages from the bot

        // Remove whitespace from chat message
        const commandName = msg.trim();

        // If the command is known, let's execute it
        if (commandName === '!dice') {
            const num = rollDice();
            client.say(target, `You rolled a ${num}`);
            io.emit("ALERTS", num);
            console.log(`* Executed ${commandName} command`);
        } else {
            console.log(`* Unknown command ${commandName}`);
        }
    }

}
export default twitchManager;