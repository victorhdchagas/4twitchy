const tmi = require('tmi.js');
const config = require('../config/index');
import TwitchPartnerController from '../controllers/TwitchPartnerController'
import TwitchEvents from './twitchevents'


function twitchManager(app, io) {
    let twitchpartner = new TwitchPartnerController(app.datasource.models, app.datasource.sequelize);
    let twitchEvents = new TwitchEvents();
    const SPECIAL_KEY = "!";
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
                if (ret === "User exists")
                    client.say(channel, `Bem vindo de volta ${username}`)
            })
    }

    function onConnectedHandler(addr, port) {

        console.log(`* Connected to ${addr}:${port}`);
    }

    async function onMessageHandler(target, context, msg, self, clients) {
        if (context.mod || context['display-name'] === config.twitch.username) {
            await twitchEvents.modMessageHandler(target, msg, client)
                .then(ret => {
                    io.emit("CONAN_HISTORIA", ret);
                })
                // client.say(target, msgToSend)
        } else if (msg.startsWith(SPECIAL_KEY)) {

            let msgToSend = await twitchEvents.onMessageHandler(target, msg, client)
        }
    }

}
export default twitchManager;