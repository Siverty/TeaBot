const token = ('ODA2NjgzNTMwMDExNjA3MDcw.YBtAlQ.QxoPpR3gxcSOZQ8VO_KlYfbZuXQ')

const Discord = require('discord.js');

const client = new Discord.Client();

client.login(token)

client.once('ready', () => {
    console.log(`Teabot is online`)
});
