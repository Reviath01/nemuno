const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
 db.set(message.author.id + '.afk', 'true')
 let afk = args.join(' ');
 if(!afk) {
   afk = "AFK"
 }
 db.set(message.author.id + '.afkreason', `${afk}`)
 const afkembed = new Discord.MessageEmbed()
 .setAuthor(message.author.username, message.author.avatarURL())
 .setDescription(`<@${message.author.id}> You are now AFK with reason: \`${afk}\``)
 .setColor('RANDOM')
 message.channel.send(afkembed)
}
      module.exports.help = {
        name: 'afk',
        aliases: ['setafk','set-afk']
     };
