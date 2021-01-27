const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
  
  let u = message.mentions.users.first() || message.author;

        if(u.bot === true) {
                const embed = new Discord.MessageEmbed()
                        .setDescription("No rank for bots!")
                        .setColor("RANDOM")
                message.channel.send(embed)
                return
        }
let xp = db.get(`xp_${message.author.id + message.guild.id}`)
if(xp === null) {
	xp = "0"
}
let level = db.get(`level_${message.author.id + message.guild.id}`)
if(level === null) {
	level = "0"
}
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
.addField(`Your level is:`,`${level}`)
.addField(`Your xp is:`, `${xp}`)
.setFooter('Do you like me -invite')
.setColor("RANDOM")
message.channel.send(embed);
};
module.exports.help = {
    name: 'rank',
    aliases: [`xp`]
};
