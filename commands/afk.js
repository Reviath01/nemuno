const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 db.set(message.author.id + '.afk', 'true')
 let afk = args.join(' ');
 if(!afk) {
   afk = "AFK"
 }
 db.set(message.author.id + '.afkreason', `${afk}`)
 message.channel.send(`<@${message.author.id}> You are now AFK with reason: ${afk}`)
}
      module.exports.help = {
        name: 'afk',
        aliases: []
     };
