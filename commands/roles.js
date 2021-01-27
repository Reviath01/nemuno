const Discord = require('discord.js');

exports.run = async (client, message, args) => {
              const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setFooter(message.guild.name, message.guild.iconURL())
			  .setAuthor(message.author.username, message.author.avatarURL())
              .setDescription(`<@&${message.guild.roles.cache.map(role => `${role.id}`).join('>, <@&')}>`)
              return message.channel.send(embed)
}
      module.exports.help = {
        name: 'roles',
        aliases: []
     };
