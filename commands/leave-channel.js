const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You need administrator permission to run this command');
const a = args[0]
if(!a) return message.channel.send('You need to mention a channel or say `disable`')
if(a == "disable") {
db.delete(`memberremovech_${message.guild.id}`)
message.channel.send('Disabled!')
} else {
let ch = message.mentions.channels.first();
if(!ch) return message.channel.send('You need to mention a channel')
db.set(`memberremovech_${message.guild.id}`, ch.id)
message.channel.send(`Succesfully setted goodbye channel as <#${ch.id}>`)
}
}

  module.exports.help = {
    name: 'goodbye-channel',
    aliases: ['goodbye-channel']
};
