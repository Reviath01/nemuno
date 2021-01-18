const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setImage('https://i.pinimg.com/originals/f3/e6/f6/f3e6f6a2dbd629e0acbe0af1e4c87c66.jpg')
.setAuthor(message.author.tag, message.author.avatarURL())
.setColor('BLUE')
message.channel.send(embed)
}

  module.exports.help = {
    name: 'nemuno',
    aliases: []
};
