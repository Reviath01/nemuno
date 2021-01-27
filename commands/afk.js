const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 db.set(message.author.id + '.afk', 'true')
 message.channel.send(`<@${message.author.id}> You are now afk`)
}
      module.exports.help = {
        name: 'afk',
        aliases: []
     };