const Discord = require("discord.js");
const moment = require("moment");
const client = new Discord.Client();
const os = require('os');
require("moment-duration-format");
exports.run = async (client, message, args) => {
   const seksizaman = moment.duration(client.uptime).format(" D [day], H [hour], m [minute], s [second]");
   const stats = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField("<a:white:797525141725642782> Authors", "<@774718136532205578> and <@770218429096656917>")
  .addField("<a:white:797525141725642782> Memory Usage", `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\`\``, true)  
  .addField("<a:white:797525141725642782> Working Time", `\`\`\`${seksizaman}\`\`\``)
  .addField("<a:white:797525141725642782> Users" , `\`\`\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`\`\``, true)
  .addField("<a:white:797525141725642782> Server Size", `\`\`\`${client.guilds.cache.size}\`\`\``, true)
  .addField("<a:white:797525141725642782> Channel Size", `\`\`\`${client.channels.cache.size}\`\`\``, true)
  .addField("<a:white:797525141725642782> Discord.JS Version", `\`\`\`v${Discord.version}\`\`\``, true)
  .addField("<a:white:797525141725642782> Node.JS Version", `\`\`\`${process.version}\`\`\``, true)
  .addField("<a:white:797525141725642782> Ping", `\`\`\`${client.ws.ping}ms\`\`\``, true)
  .addField("<a:white:797525141725642782> CPU", `\`\`\`\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("<a:white:797525141725642782> Bit", `\`\`\`${os.arch()}\`\`\``, true)
  .addField("<a:white:797525141725642782> OS Platform", `\`\`\`${os.platform()}\`\`\``) 
  .addField("> Invite Me!", " [Invite link](https://discordapp.com/oauth2/authorize?client_id=797421915152449537&scope=bot&permissions=8)", ) 
  return message.channel.send(stats);

};
module.exports.help = {
    name: 'stats',
    aliases: ['s']
};
