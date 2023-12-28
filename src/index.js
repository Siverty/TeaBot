require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on('interactionCreate', (Interaction) => {
  if (!Interaction.isChatInputCommand()) return;

  if (Interaction.commandName === 'add') {
    const num1 = Interaction.options.get('first_number').value;
    const num2 = Interaction.options.get('second_number').value;

    Interaction.reply(`${num1} + ${num2} \n= ${num1 + num2}`);
  }

});

client.login(process.env.TOKEN);