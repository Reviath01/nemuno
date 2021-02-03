const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You need administrator permission to run this command')
let arg = args[0]
if(!arg) return message.channel.send('You need to say `activate` or `disable` or `set {New Message}` \nOn setting new message you can use {level} and {mention}')
if(arg == "activate") {
db.set(`lvlmsg_${message.guild.id}`, "active")
message.channel.send('Succesfully activated!')
}
else if(arg == "disable") {
db.delete(`lvlmsg_${message.guild.id}`)
message.channel.send('I will not send level up messages anymore!')
}
else if(arg == "set"){
  db.set(`lvlmsg2_${message.guild.id}`, args.slice(1).join(' '))
  message.channel.send('Succesful!')
}
else {
message.channel.send('You need to say `activate` or `disable` or `set {New Message}` \nOn setting new message you can use {level} and {mention}')
}
}

  module.exports.help = {
    name: 'levelmessage',
    aliases: ['level-message', 'lvl-message', 'lvlmessage']
};
