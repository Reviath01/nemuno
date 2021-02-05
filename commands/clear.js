const Discord = require('discord.js');
exports.run = function(client, message, args) {

  let messagecount = parseInt(args.join(' '));
  if (!messagecount) return message.channel.send('How many messages do you want to delete')
  if (messagecount > 99) return message.channel.send(`I can't delete more than 99 messages!`);
  message.channel.bulkDelete(messagecount + 1);
  message.channel.send(`Deleted ${messagecount} messages!`)
};

module.exports.help = {
    name: 'clear',
    aliases: ['purge','sil','temizle']
};
