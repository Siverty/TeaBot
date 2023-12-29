module.exports = {
  name: "ping",
  description: "Ping the bot!",
  devOnly: true,
  // testOnly: Boolean,
  // options: Objects[]
  // deleted: Boolean
  // permissionsRequired: [i.e.: Administrator],

  callback: (client, interaction) => {
    interaction.reply({ content: `Pong!${client.ws.ping}ms`, ephemeral: true });
  },
};
