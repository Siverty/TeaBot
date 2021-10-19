module.exports = {
    name: 'help',
    description: "this is a ping command!",
    execute(message, args, Discord) {
        const ADMIN = message.guild.members.cache.find(U => U.id === '246259405442514944')
        const NEWEMBED = new Discord.MessageEmbed()
            .setColor('#680118')
            .setTitle('Help')
            .setURL('https://tinyurl.com/getfooledyoufool')
            .setDescription('this is an embed for general help using this bot')
            .addFields(
                { name: 'help', value: 'You are currently looking at it' },
                { name: 'clear', value: 'Clears messages' },
                { name: 'mute', value: 'Mutes a server member for a determined amount of time' },
                { name: 'unmute', value: "Unmutes a server member if you haven't predeterminded the amount of time muted" },
                { name: 'play', value: 'Use this command to play some of your favourite music, you can use just the title or a link' },
                { name: 'poll', value: 'Makes a poll so you can get your dillemma sorted' }
                // {name: 'help', value: 'you are looking at it'},
            )
            .setImage(`https://media1.tenor.com/images/50ed15333802d720d522440fa5f5c498/tenor.gif?itemid=9233151`)
            .setFooter(`If you think the help command needs more work or needs to be updated, please contact the devs`)

        message.channel.send(NEWEMBED)
    }
}
//this file is to be expanded upon when new features are added