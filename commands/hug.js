const Discord = require('discord.js')
exports.run = async (client, message, args) => {
let user = message.mentions.users.first()
if (message.mentions.users.size < 1) return message.channel.send('You need to mention someone to hug!').catch(console.error);
if (user.id === message.author.id) return message.channel.send('Are you this alone to hug your self, it\'s sad')
const hugging = new Discord.MessageEmbed()
.setColor(0xff7369)
.setDescription(`${message.author} Hugs ${message.mentions.members.first()} 🥰`)
.setImage('https://cdn.discordapp.com/attachments/792137616627204097/797516034109079572/hugging.gif')
message.channel.send(hugging)
};
module.exports.help = {
    name: 'hug',
    aliases: []
};
