require('dotenv').config();
const TOKEN = process.env.TOKEN;
const TENORKEY = process.env.TENORKEY;

const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = "-";

const VERSION = ('0.0.1');

client.login(TOKEN);

client.once('ready', () => {
    console.log("Teabot is online\nVersion", VERSION)
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
//lol command structure oversight
    if(command === 'ping'){

    }
});
