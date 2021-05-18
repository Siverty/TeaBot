const token = ('')

const Discord = require('discord.js');

const client = new Discord.Client();

client.login(token)

client.once('ready', () => {
    console.log(`Teabot is online`)
});
