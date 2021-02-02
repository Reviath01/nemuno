const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You need administrator permission to run this command');
const a = args[0]
if(!a) return message.channel.send('You need to say type a message for new members or say `default`')
if(a == "default") {
db.delete(`newmembermsg_${message.guild.id}`)
message.channel.send('Setted to default')
} else {
let msg = args.join(' ')
if(!msg) return message.channel.send('You need to specify a message \n{mention} mention\'s user {username} show\'s username')
db.set(`memberremovemsg_${message.guild.id}`, msg)
message.channel.send(`Succesfully setted new message`)
}
}

  module.exports.help = {
    name: 'goodbye-message',
    aliases: ['goodbyemessage','leave-message','leavemessage']
};