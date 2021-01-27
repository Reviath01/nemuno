const Discord = require("discord.js");
const moment = require("moment");
exports.run = async (client, message, args) => {
let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL())
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `<@${message.guild.owner.id}>`)
            .addField("Member Count", `${message.guild.memberCount} Members`)
            .addField("Emoji Count", `${message.guild.emojis.cache.size} Emojis`)
			 .addField("Highest Role", `<@&${message.guild.roles.highest.id}>`)
            .addField("Roles Count", `${message.guild.roles.cache.size} Roles (to see all roles use \`-roles\` command)`)
			.addField("Created At", `${moment(message.guild.createdAt).format('lll') + '\n' + moment(new Date()).diff(message.guild.createdAt, 'days') + ' days ago'}`)
        message.channel.send(embed)
}
module.exports.help = {
    name: 'server-info',
    aliases: ['serverinfo','si']
};
