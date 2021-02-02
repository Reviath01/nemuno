const Discord = require('discord.js');
const moment = require('moment')

exports.run = (client, message , args) => {
  let user = message.guild.member(message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]));
  client.users.cache.get(user);
  let statuss = user.presence.status;
if(statuss == "dnd"){
    statuss = "Do not Disturb"
}
if(statuss == "online"){
    statuss = "Online"
}
if(statuss == "idle"){
    statuss = "Idle"
}
if(statuss == "offline"){
    statuss = "Offline / Invisible"
}
    const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTitle("User İnformation")
    .setTimestamp()
    .addField('User:',`<@${user.id}>`)
    .addField('User ID:', `${user.id}`)
    .addField('Created At:', `${moment(user.user.createdAt).format('lll') + '\n' + moment(new Date()).diff(user.user.createdAt, 'days') + ' days ago'}`)
    .addField('Joined At:', `${moment(user.joinedAt).format('lll') + '\n' + moment(new Date()).diff(user.joinedAt, 'days') + ' days ago'}`)
    .addField('Last Message:', `${user.lastMessage}`)
    .addField('Status:', `${statuss}`)
  return message.channel.send(embed);
};

  module.exports.help = {
    name: 'whois',
    aliases: []
};