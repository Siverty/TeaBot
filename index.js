//required for reading the .env file
require('dotenv').config();

//easy input for the tokens put in the .env file
const TOKEN = process.env.TOKEN;
const TENORKEY = process.env.TENORKEY;

//don't change this, includes basic requires for the bot to operate
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

//prefix that will be used to call upon the bot in a discord text channel
const PREFIX = process.env.PREFIX;

//const that requires mongoose/mongoDB (currently not in use)
const mongoose = require('mongoose');

//const that requires file selection for looking into the bot folder
const fs = require('fs');

//makes commands a collection, needed for the bot to function
client.commands = new Discord.Collection();

//determines where to look for the commands for use in the command handler
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//handy placeholder for the bot version, only updated when a major improveement or update is added
const VERSION = ('0.0.8');

//login for client, defined in the .env file
client.login(TOKEN);

//under here is the first thing the bot does when booted up
client.once('ready', () => {
    console.log("Teabot is online\nVersion", VERSION);
    client.user.setActivity("out for a tea party", {
        type: "WATCHING",
    })
});

//welcome role, this is hardcoded into the index.js file because no better way has yet been found
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Welcome');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('844677904246898689').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
}); //(NOTE: update to work with reactionroles)

//message handler
client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //it is not clear if the abbreviations work in practice, unstable
    if (command === 'help', 'h') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 't', 'tarkov') {
        client.commands.get('tarkov').execute(message, args, Discord);
    } else if (command == 'serverelection') {
        client.commands.get('serverelection').execute(message, args, Discord, client);
    } else if (command == 'clear', 'c') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'mute', 'm') {
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute', 'um') {
        client.commands.get('unmute').execute(message, args);
    }
});

//portion of MongoDB code, to be used in the future if needed

// mongoose.connect(process.env.MONGODB_SRV, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     UserFindAndModigy: false
// })
// .then(()=>{
//     console.log('<connected to the database>');
// })
// .catch((err) => {
//     console.log(err);
// });
