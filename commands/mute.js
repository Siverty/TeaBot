const MS = require('MS');
module.exports = {
    name: 'mute',
    description: "this is a mute command!",
    execute(message, args) {
        if (message.member.roles.cache.some(r => r.name === "Mods")) {
            const TARGET = message.mentions.users.first();
            if (TARGET) {

                let mainRole = message.guild.roles.cache.find(role => role.name === 'Cool');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(TARGET.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${MS(MS(args[1]))}`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been unmuted.\n${MS(MS(args[1]))} have passed:alarm_clock:`);
                }, MS(args[1]));
            } else {
                message.channel.send('Cant find that member!');
            }
        }else {
            message.reply("you don't have the permission to use this command")
        }
    }
}