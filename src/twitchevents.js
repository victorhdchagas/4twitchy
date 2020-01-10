import twitchManager from "./bot";

class TwitchEvents {
    constructor(client) {}
    onJoinedChannelHandler(channel, username, self) {

    }

    onConnectedHandler(addr, port) {

        console.log(`* Connected to ${addr}:${port}`);
    }


    async onMessageHandler(target, msg, client) {
        console.log('onMessageHandler')
        return await new Promise(async function(res, rej) {

            // Remove whitespace from chat message
            const commandName = msg.trim();
            if (commandName === "!legendy") {
                client.say(target, "Pega no meu pau")
            } else {
                client.say(target, commandName.split("").reverse().join(""))
            }
            return res(commandName.split("!").join(""));
        })
    }

    async modMessagesHandler(target, msg, client) {
        return await new Promise(function(res, rej) {
            // client.say(target, new Date().toLocaleString());
            res(new Date().toLocaleString())
            return "";

        })

    }

}
export default TwitchEvents;