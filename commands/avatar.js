const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    
    let member = message.mentions.users.first() || message.author
message.channel.send(new Discord.MessageEmbed()
.setImage(member.avatarURL({dynamic : true, size: 4096}))
.setColor("RANDOM"));
};

module.exports.help = {
    name: 'pfp',
    aliases: ['avatar', 'pp','av']
};
