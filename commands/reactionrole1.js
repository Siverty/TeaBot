module.exports = {
    name: 'serverelection',
    description: "specific hardcoded electioncommand for the server!",
    async execute(message, args, Discord, client) {
        const channel = '845059321830309898';
        const ServerElectorRole = message.guild.roles.cache.find(role => role.name === "Server Elector");
        const GamerHoleTeamRole = message.guild.roles.cache.find(role => role.name === "GamerHole Team");
        const MasturbeermeerTeamRole = message.guild.roles.cache.find(role => role.name === "Masturbeermeer Team");
        const VOCALLTHEWAYTeamRole = message.guild.roles.cache.find(role => role.name === "VOC All The Way Team");
        const GrindrTeamRole = message.guild.roles.cache.find(role => role.name === "Grindr Team");
        const DiscordAndChillTeamRole = message.guild.roles.cache.find(role => role.name === "Discord And Chill Team");
        const DeKolonisatieClubTeamRole = message.guild.roles.cache.find(role => role.name === "De KolonisatieClub Team");
        const TheBeerBoisTeamRole = message.guild.roles.cache.find(role => role.name === "The Beer Bois Team");
        const TheCumZoneTeamRole = message.guild.roles.cache.find(role => role.name === "The Cum Zone Team");
        const TakeMeToSnurchTeamRole = message.guild.roles.cache.find(role => role.name === "Take Me To Snurch Team");
        const NoChangeTeamRole = message.guild.roles.cache.find(role => role.name === "FapHut Forever Team");


        const GamerHoleTeamEmoji = '🇦';
        const MasturbeermeerTeamEmoji = '🇧';
        const VOCALLTHEWAYTeamEmoji = '🇨';
        const GrindrTeamEmoji = '🇩';
        const DiscordAndChillTeamEmoji = '🇪';
        const DeKolonisatieClubTeamEmoji = '🇫';
        const TheBeerBoisTeamEmoji = '🇬';
        const TheCumZoneTeamEmoji = '🇭';
        const TakeMeToSnurchTeamEmoji = '🇮';
        const NoChangeTeamEmoji = '🇯';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose wich name you like better!')
            .setDescription('Choosing a name will allow you to interact with people agreeing with your coice!\nChoose wisely because you can only choose once!\n\n'
                + `${GamerHoleTeamEmoji} GamerHole Team\n`
                + `${MasturbeermeerTeamEmoji} Masturbeermeer Team\n`
                + `${VOCALLTHEWAYTeamEmoji} VOC All The Way Team\n`
                + `${GrindrTeamEmoji} Grindr Team\n`
                + `${DiscordAndChillTeamEmoji} Discord And Chill Team\n`
                + `${DeKolonisatieClubTeamEmoji} De KolonisatieClub Team\n`
                + `${TheBeerBoisTeamEmoji} The Beer Bois Team\n`
                + `${TheCumZoneTeamEmoji} The Cum Zone Team\n`
                + `${TakeMeToSnurchTeamEmoji} Take Me To Snurch Team\n`
                + `${NoChangeTeamEmoji} FapHut Forever Team`)
            .setFooter("The Server Elector role will be removed once you've chosen, ask admins to add it again if you want to change your choise.");

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(GamerHoleTeamEmoji);
        messageEmbed.react(MasturbeermeerTeamEmoji);
        messageEmbed.react(VOCALLTHEWAYTeamEmoji);
        messageEmbed.react(GrindrTeamEmoji);
        messageEmbed.react(DiscordAndChillTeamEmoji);
        messageEmbed.react(DeKolonisatieClubTeamEmoji);
        messageEmbed.react(TheBeerBoisTeamEmoji);
        messageEmbed.react(TheCumZoneTeamEmoji);
        messageEmbed.react(TakeMeToSnurchTeamEmoji);
        messageEmbed.react(NoChangeTeamEmoji);


        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === GamerHoleTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(GamerHoleTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === MasturbeermeerTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MasturbeermeerTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === VOCALLTHEWAYTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(VOCALLTHEWAYTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === GrindrTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(GrindrTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === DiscordAndChillTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DiscordAndChillTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === DeKolonisatieClubTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DeKolonisatieClubTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === TheBeerBoisTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TheBeerBoisTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === TheCumZoneTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TheCumZoneTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === TakeMeToSnurchTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TakeMeToSnurchTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
                if (reaction.emoji.name === NoChangeTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(NoChangeTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.remove(ServerElectorRole);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === GamerHoleTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(GamerHoleTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === MasturbeermeerTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MasturbeermeerTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === VOCALLTHEWAYTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(VOCALLTHEWAYTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === GrindrTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(GrindrTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === DiscordAndChillTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DiscordAndChillTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === DeKolonisatieClubTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DeKolonisatieClubTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === TheBeerBoisTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TheBeerBoisTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === TheCumZoneTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TheCumZoneTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === TakeMeToSnurchTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TakeMeToSnurchTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
                if (reaction.emoji.name === NoChangeTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(NoChangeTeamRole),
                        reaction.message.guild.members.cache.get(user.id).roles.add(ServerElectorRole);
                }
            } else {
                return;
            }
        });
    }
}