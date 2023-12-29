module.exports = {
    name: "ping",
    description: "Ping!",
    // devOnly: Boolean
    // testOnly: Boolean
    // options: Objects[]
    // deleted: Boolean
    // permissionsRequired: [i.e.: Administrator],

    callback: (client, interaction) => {
        interaction.reply(`Pong!${client.ws.ping}ms`); 
    }
}