const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  name: "ban",
  description: "Ban a user from the server!",
  // devOnly: Boolean
  // testOnly: Boolean
  options: [
    {
      name: "target-user",
      description: "The user to ban",
      type: ApplicationCommandOptionType.Mentionable,
      required: true,
    },
    {
      name: "reason",
      description: "Reason for ban",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
  ],
  // deleted: Boolean

  permissionsRequired: [PermissionFlagsBits.Administrator],

  callback: (client, interaction) => {
    const targetUser = interaction.options.get("target-user").user;
    interaction.reply(`Banning user: ${targetUser.username}`);
  },
};
