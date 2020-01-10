const tmi = require('tmi.js');
const config = require('../config/index');
import TwitchPartnerController from '../controllers/TwitchPartnerController'
import TwitchEvents from './twitchevents'


function twitchManager(app, io) {
    let twitchpartner = new TwitchPartnerController(app.datasource.models, app.datasource.sequelize);
    let twitchEvents = new TwitchEvents();
    // Define configuration options
    const opts = {
        identity: {
            username: config.twitch.username,
            password: config.twitch.password
        },
        channels: config.twitch.channels
    };
    const client = new tmi.client(opts);

    client.on('message', onMessageHandler);
    client.on('connected', onConnectedHandler);
    client.on('join', onJoinedChannelHandler)

    client.connect();

    io.on('connection', onSocketConnection)

    function onSocketConnection(socket) {
        console.log("\t novo usuario conectado")
    }

    function onJoinedChannelHandler(channel, username, self) {
        if (self) { console.log('Self'); return; }
        console.log('onJoinedChannelHandler')
        let partnerToCreate = {};
        partnerToCreate.nick = username;

        twitchpartner.create(partnerToCreate)
            .then(ret => {

                console.log(ret.msg);
            })
    }

    function onConnectedHandler(addr, port) {

        console.log(`* Connected to ${addr}:${port}`);
    }

    async function onMessageHandler(target, context, msg, self, clients) {

        console.log('onMessageHandler')

        if (context.mod) {
            let msgToSend = await twitchEvents.modMessageHandler(target, msg, client)
            client.say(target, msgToSend)
        } else if (msg.startsWith("!")) {

            let msgToSend = await twitchEvents.onMessageHandler(target, msg, client)
                // client.say(target, msgToSend)
                // .then(ret => {
                //     client.say(target, ret)
                //     console.log("worked")
                // });
        }
        // console.log('onMessageHandler')
        // if (self) { return; } // Ignore messages from the bot

        // // Remove whitespace from chat message
        // const commandName = msg.trim();

        // // If the command is known, let's execute it
        // if (commandName === '!dice') {
        //     const num = rollDice();
        //     client.say(target, `You rolled a ${num}`);
        //     io.emit("ALERTS", num);
        //     console.log(`* Executed ${commandName} command`);
        // } else {
        //     console.log(`* Unknown command ${commandName}`);
        // }
    }

}
export default twitchManager;