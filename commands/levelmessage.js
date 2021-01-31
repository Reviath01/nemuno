const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if(!message.author.hasPermission("ADMINISTRATOR")) return message.channel.send('You need administrator permission to run this command')
let arg = args[0]
if(!arg) return message.channel.send('You need to say `activate` or `disable`')
if(arg == "activate") {
db.set(`lvlmsg_${message.guild.id}`, "active")
message.channel.send('Succesfully activated!')
}
else if(arg == "disable") {
db.delete(`lvlmsg_${message.guild.id}`)
message.channel.send('I will not send level up messages anymore!')
}
else {
message.channel.send('You need to say `activate` or `disable`')
}
}

  module.exports.help = {
    name: 'levelmessage',
    aliases: ['level-message', 'lvl-message', 'lvlmessage']
};
