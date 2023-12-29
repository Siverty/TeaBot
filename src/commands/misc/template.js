module.exports = {
  name: "template",
  description: "Template command",
  devOnly: true,
  // testOnly: Boolean,
  // options: Objects[]
  // deleted: Boolean,
  // permissionsRequired: [i.e.: Administrator],

  callback: (client, interaction) => {
    interaction.reply(`Template command -- working as intended.`);
  },
};


// This is the example template for a command, copy and paste it and modify it to your needs.
/*
module.exports = {
    name: "",
    description: "",
    // devOnly: false,                                      // false by default
    // testOnly: false,                                     // false by default
    // options: [                                           // change to desired options
    {
      name: "",
      description: "",
      type: type of discord.js ApplicationCommandOptionType,
      required: true,                                       // true if required, false if not
    }, // Example:
    {
      name: "target-user",
      description: "The user to ban",
      type: ApplicationCommandOptionType.Mentionable,
      required: true,
    },
  ],  
    // deleted: false,                                      // false by default
    // permissionsRequired:                                 // required permissions, i.e.: [PermissionFlagsBits.Administrator],
  
    callback: (client, interaction) => {
      interaction.reply(`put your reply here`);
    },
  };
*/
