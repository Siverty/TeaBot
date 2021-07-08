module.exports = {
    name: 'tarkov',
    description: "ammochart reader for tarkov",
    execute(message, args, Discord) {
        const fs = require('fs');

        fs.readFile('./tarkov-ammo.json', 'utf8', (err, data) => {

            //
            var ammo = JSON.parse(data);
            var ammoList = ammo.filter(element => element["Name"].toLowerCase().includes(args[0].toLowerCase()));
            if (ammoList.length == 0){
                ammoList = ammo.filter(element => element["Caliber"].toLowerCase().includes(args[0].toLowerCase()));
            }
            
            
            //
            ammoFetch = []
            ammoList.forEach(element => {
                ammoFetch.push({ name: element['Name'], value: 
                `Caliber: ${element['Caliber']}
                Damage: ${element['Damage']}
                Penetration: ${element['Penetration']}
                Armor Damage: ${element['Armor_Damage']}
                Fragmentation: ${element['Fragmentation']}` })
            });

            //
            var AMMOEMBED = new Discord.MessageEmbed()
                .setColor('#680118')
                .setTitle('Ammo')
                .setURL('https://tinyurl.com/getfooledyoufool')
                .setDescription('this is an ammo embed for general help using this bot')
            ammoFetch.forEach(element => { AMMOEMBED.addFields(element) })

            //
            message.channel.send(AMMOEMBED)
        });
    }
}