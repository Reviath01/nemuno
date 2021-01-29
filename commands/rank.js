const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let u = message.mentions.users.first() || message.author;

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("No rank for bots!")
                        .setColor("RANDOM")
                message.channel.send(embed)
                return
        }
let xp = db.get(`xp_${u.id + message.guild.id}`)
if(xp === null) {
	xp = "0"
}
let level = db.get(`level_${u.id + message.guild.id}`)
if(level === null) {
	level = "0"
}
const embed = new Discord.MessageEmbed()
.setAuthor(u.username, u.avatarURL())
.addField(`Your level is:`,`${level}`)
.addField(`Your xp is:`, `${xp}/150`)
.setFooter('Do you like me -invite')
.setColor("RANDOM")
.setFooter(`Command used by: ${message.author.username}`)
message.channel.send(embed);
};
module.exports.help = {
    name: 'rank',
    aliases: [`xp`]
};
