const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
if(!message.author.hasPermission("MANAGE_CHANNELS") return message.channel.send('You need manage channels permission to run this command')
const limit = args[0]
  if(!limit) {
      message.channel.send('You need to specify a duration')
          }
 message.channel.setRateLimitPerUser(limit).then(() => {
        message.channel.send(`Slowmode Setted to ${limit}s`);
    });
   };
module.exports.help = {
    name: 'slowmode',
    aliases: ['sm']
};
