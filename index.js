//used for corrospondance between this and the .env file
require('dotenv').config();

//easy input for the tokens put in the .env file
const TOKEN = process.env.TOKEN;
const TENORKEY = process.env.TENORKEY;

//don't change this
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

//prefix, used to write specific commands
const PREFIX = "-";

const fs = require('fs');

//makes commands a collection within discord
client.commands = new Discord.Collection();

//determines where to look for the commands for use in the command handler
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//handy placeholder for the bot version
const VERSION = ('0.0.7');

//login for client, defined in the .env file
client.login(TOKEN);

//under here is the first thing the bot does when booted up
client.once('ready', () => {
    console.log("Teabot is online\nVersion", VERSION);
    client.user.setActivity("out for a tea party", {
        type: "WATCHING",
        url: "https://github.com/Siverty/TeaBot"
    })
});

//welcome role
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Welcome');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('844677904246898689').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});

//message handler
client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'serverelection') {
        client.commands.get('serverelection').execute(message, args, Discord, client);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args);
    }
});
