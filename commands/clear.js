module.exports = {
    name: 'clear',
    description: "this is a clear command!",
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear:rolling_eyes:");
        if(isNaN(args[0])) return message.reply("Please enter a real number:confused:");

        if(args[0] > 10) return message.reply("You cannot delete more than 10 messages!");
        if(args[0] < 1) return message.reply("If you dont want to delete anything at all, why even go through the effort of typing this?");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.reply(`Done:thumbsup:, I deleted ${args} messages`)
        });
    }
}