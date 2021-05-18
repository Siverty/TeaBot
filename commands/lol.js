module.exports = {
    name: 'lol',
    description: "this is a lol command!",
    execute(message, args){
        message.channel.send('lol');
    }
}