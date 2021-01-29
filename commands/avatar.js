const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    
let member = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]);
const embed = new Discord.MessageEmbed()
.setImage(member.avatarURL({dynamic : true, size: 4096}))
.setColor("RANDOM")
message.channel.send(embed);
};

module.exports.help = {
    name: 'pfp',
    aliases: ['avatar', 'pp','av']
};
