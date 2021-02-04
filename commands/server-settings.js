const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
let welcomechannel = db.get(`memberaddch_${message.guild.id}`)
if(welcomechannel === null){
    welcomechannel = "Not Setted"
}
let welcomemessage = db.get(`newmembermsg_${message.guild.id}`)
if(welcomemessage === null) {
    welcomemessage = `Welcome to server {mention}`
}
let goodbyechannel = db.get(`memberremovech_${message.guild.id}`)
if(goodbyechannel === null) {
    goodbyechannel = "Not Setted"
}
let goodbyemessage = db.get(`memberremovemsg_${message.guild.id}`)
if(goodbyemessage === null) {
    goodbyemessage = `{mention} left the server!`
}
let lvlmsg = db.get(`lvlmsg2_${message.guild.id}`)
if(lvlmsg === null) {
    lvlmsg = `{mention} is now {level} level :tada:`
}
let linkblock = db.get(`link_${message.guild.id}`)
if(linkblock === null) {
    linkblock = "Not Blocked"
}
if(linkblock === "deny"){
    linkblock = "Blocked"
}

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
.setFooter(message.guild.name, message.guild.iconURL())
.setDescription(`${message.guild.name}'s Settings`)
.addField("Welcome Channel", `<#${welcomechannel}>`)
.addField("Welcome Message", `${welcomemessage}`)
.addField("Goodbye Channel", `<#${goodbyechannel}>`)
.addField("Goodbye Message", `${goodbyemessage}`)
.addField("Level Message", `${lvlmsg}`)
.addField("Link Block", `${linkblock}`)
message.channel.send(embed)
};
module.exports.help = {
    name: 'server-settings',
    aliases: ['settings']
};
