const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let category = args[0];

if (!category){
    const embedhelp = new Discord.MessageEmbed()
.setTitle('Nemuno Help Menu!')
.addFields(
    { name: '<:SakataNemuno:797431285538488360> Moderation Commands', value: 'Type `-help moderation` To See My Moderation Commands!' },
    { name: '<:SakataNemuno:797431285538488360> Fun Commands', value: 'Type `-help fun` To See My Fun Commands!' },
)
.setColor(0x2ae82e)
message.channel.send(embedhelp)
}
if (category == 'moderation'){
    const moderationembed = new Discord.MessageEmbed()
    .setTitle('Nemuno Moderation Menu!')
    .addFields(
        { name: '-ban {User} {Reason}', value: 'Ban user from your guild!' },
        { name: '-mute {User} {Duration} {Reason}', value: 'shut the fuck up command' },
        { name: '-kick {User} {Reason}', value: 'Kick user from your guild!' },
    )
    .setColor(0xff0000)
    message.channel.send(moderationembed)
}
}
  module.exports.help = {
    name: 'help',
    aliases: ['plshelp']
};
