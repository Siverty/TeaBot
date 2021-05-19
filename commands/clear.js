module.exports = {
    name: 'clear',
    description: "this is a clear command!",
    async execute(message, args) {
        if (message.member.roles.cache.some(r => r.name === "Mods")) {
            if (!args[0]) return message.reply("Please enter the amount of messages that you want to clear:rolling_eyes:");
            if (isNaN(args[0])) return message.reply("Please enter a real number:confused:");

            if (args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
            if (args[0] < 1) return message.reply("If you dont want to delete anything at all, why even go through the effort of typing this?");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
                message.reply(`Done:thumbsup:\nI deleted ${args} messages`)
            });
        } else {
            if (!args[0]) return message.reply("Please enter the amount of messages that you want to clear:rolling_eyes:");
            if (isNaN(args[0])) return message.reply("Please enter a real number:confused:");

            if (args[0] > 5) return message.reply("You cannot delete more than 5 messages because you are not a moderator!");
            if (args[0] < 1) return message.reply("If you dont want to delete anything at all, why even go through the effort of typing this?");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
                message.reply(`Done:thumbsup:\nI deleted ${args} messages`)
            });
        }
    }
}