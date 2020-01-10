import twitchManager from "./bot";

class TwitchEvents {
    constructor(client) {}
    onJoinedChannelHandler(channel, username, self) {

    }

    onConnectedHandler(addr, port) {

        console.log(`* Connected to ${addr}:${port}`);
    }


    async onMessageHandler(target, msg, client) {
        return await new Promise(async function(res, rej) {

            const commandName = msg.trim();
            if (commandName === "!legendy") {
                client.say(target, "Pega no meu pau")
            } else {
                client.say(target, commandName.split("").reverse().join(""))
            }
            return res(commandName.split("!").join(""));
        })
    }

    async modMessageHandler(target, msg, client) {
        return await new Promise(function(res, rej) {
            if (msg === "!conan") {
                res({ imagem: "https://www.tenthumbstypingtutor.com/images/home/viking_home_bg.gif", nome: "Victor", historia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" })
            }

        })

    }

}
export default TwitchEvents;