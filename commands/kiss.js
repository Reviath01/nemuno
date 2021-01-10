const Discord = require('discord.js')
exports.run = async (client, message, args) => {
let user = message.mentions.users.first()
if (message.mentions.users.size < 1) return message.channel.send('You need to mention someone to kiss!').catch(console.error);
if (user.id === message.author.id) return message.channel.send('You can not kiss yourself!')
const kiss = new Discord.MessageEmbed()
.setColor(0xff7369)
.setDescription(`${message.author} Kisses ${message.mentions.members.first()} 💋`)
.setImage('https://media.tenor.com/images/d68747a5865b12c465e5dff31c65d5c2/tenor.gif')
message.channel.send(kiss)
};
module.exports.help = {
    name: 'kiss',
    aliases: []
};
