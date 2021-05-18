require('dotenv').config();
const TOKEN = process.env.TOKEN;
const TENORKEY = process.env.TENORKEY;

const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = "-";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

const VERSION = ('0.0.3B');

client.login(TOKEN);

client.once('ready', () => {
    console.log("Teabot is online\nVersion", VERSION)
});

client.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'lol'){
        client.commands.get('lol').execute(message, args);
    }
});
