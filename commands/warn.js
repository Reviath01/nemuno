const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You need kick members permission to run this command");
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (!user) return message.channel.send("Who are you warning?");
  if(user == message.author) return message.channel.send('You can\'t warn yourself');
  if (!reason) return message.channel.send("Why are you warning");
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`You have been warned by <@${message.author.id}>`)
  .setTimestamp()
  .addField('Warn reason:', reason)
  .setFooter(client.user.username, client.user.avatarURL())
   user.send(embed)
message.channel.send('I send your message')
};
module.exports.help = {
    name: 'warn',
    aliases: []
 };
