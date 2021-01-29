const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('../settings.json');
const moment = require('moment')

exports.run = (client, message , args) => {
  let user = message.guild.member(message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0])););
  if(!user) return message.channel.send('No users to whois!')
  client.users.cache.get(user);
    const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTitle("User İnformation")
    .setTimestamp()
    .addField('User:',`<@${user.id}>`)
    .addField('User ID:', `${user.id}`)
    .addField('Created At:', `${moment(user.user.createdAt).format('lll') + '\n' + moment(new Date()).diff(user.user.createdAt, 'days') + ' days ago'}`)
    .addField('Joined At:', `${moment(user.joinedAt).format('lll') + '\n' + moment(new Date()).diff(user.joinedAt, 'days') + ' days ago'}`)
    .addField('Last Message:', `${user.lastMessage}`);
  return message.channel.send(embed);
};

  module.exports.help = {
    name: 'whois',
    aliases: []
};
