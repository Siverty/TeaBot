module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args) {
        if (message.member.roles.cache.some(r => r.name === "Mods")) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Cool');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else {
                message.channel.send('Cant find that member!');
            }
        } else {
            message.reply("you don't have the permission to use this command")
        }
    }
}