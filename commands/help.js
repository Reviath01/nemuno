const Discord = require('discord.js');
const fs = require('fs');
exports.run = async (client, message, args) => {
let category = args[0];

if (!category){
    const embedhelp = new Discord.MessageEmbed()
.setTitle('Nemuno Help Menu!')
.addFields(
    { name: '<a:developer:786112416567263262> Moderation Commands', value: '-ban {User} {Reason} \n-mute {User} {Duration} {Reason} \n-unmute {User} \n-kick {User} {Reason} \n-clear {Amount} \nType `-help moderation` for details' },
    { name: '<a:butterfly:797752340014694410> Fun Commands', value: '-avatar {User} \n-kiss {User} \n-hug {User} \nType `-help fun` for details' },
    { name: '<a:FeelsEveryone:721199565260193854> User Commands', value: '-stats \n-invite \n-ping \n-whois {User}\nType `-help user` for details' },
)
.setColor(0x2ae82e)
.setThumbnail(client.user.displayAvatarURL())
message.channel.send(embedhelp)
}
if (category == 'moderation'){
    const moderationembed = new Discord.MessageEmbed()
    .setTitle('Nemuno Moderation Menu!')
    .addFields(
        { name: '<a:developer:786112416567263262> -ban {User} {Reason}', value: 'Ban user from your guild!' },
        { name: '<a:developer:786112416567263262> -mute {User} {Duration} {Reason}', value: 'shut the fuck up command' },
        { name: '<a:developer:786112416567263262> -kick {User} {Reason}', value: 'Kick user from your guild!' },
        { name: '<a:developer:786112416567263262> -unmute {User}', value: 'Unmute\'s the user' },
        
        { name: '<a:developer:786112416567263262> -clear {Amount}', value: 'Delete\'s messages' },
    )
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(0xff0000)
    message.channel.send(moderationembed)
}
if (category == 'fun'){
    const funembed = new Discord.MessageEmbed()
    .setTitle('Nemuno Fun Menu!')
    .addFields(
        { name: '<a:butterfly:797752340014694410> -avatar {User}', value: 'Show\'s the avatar' },
        { name: '<a:butterfly:797752340014694410> -kiss {User}', value: 'Kiss\'es the user that you mentioned' },
        { name: '<a:butterfly:797752340014694410> -hug {User}', value: 'You hug the user that you mentioned' },
    )
    .setColor(0xffa900)
    .setThumbnail(client.user.displayAvatarURL())
    message.channel.send(funembed)
}
if (category == 'user'){
    const userembed = new Discord.MessageEmbed()
    .setTitle('Nemuno User Menu!')
    .addFields(
        { name: '<a:FeelsEveryone:721199565260193854> -stats', value: 'Show bot\'s stats' },
        { name: '<a:FeelsEveryone:721199565260193854> -invite', value: 'Send\'s the bots invite link' },
        { name: '<a:FeelsEveryone:721199565260193854> -whois', value: 'Give\'s user information' },
    )
    .setColor(0x5a99ff)
    .setThumbnail(client.user.displayAvatarURL());
    message.channel.send(userembed)
}

}
  module.exports.help = {
    name: 'help',
    aliases: ['plshelp','h']
};
