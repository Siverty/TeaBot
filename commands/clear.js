module.exports = {
    name: 'clear',
    description: "this is a clear command!",
    async execute(message, args) {
        if ((errorMessage = argumentInvalidError(args)) != "")
            return message.reply(errorMessage);
            
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
            message.reply(`Done:thumbsup:\nI deleted ${args} messages`)
        });
    }
}

function argumentInvalidError(args) {
    if (!args[0])
        return "Please enter the amount of messages that you want to clear🙄";

    if (isNaN(args[0])) 
        return "Please enter a real number😕";

    if (args[0] < 1) 
        return "If you dont want to delete anything at all, why even go through the effort of typing this?";

    if (args[0] > 5 && message.member.roles.cache.some(r => r.name !== "Mods")) 
        return "You cannot delete more than 5 messages because you are not a moderator!"; //But what if I spam the command?

    if (args[0] > 100) 
        return "You cannot delete more than 100 messages!";

    return "";
}