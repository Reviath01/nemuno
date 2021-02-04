const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
    let message1 = args[0]
    if(!message1) return message.channel.send('You need to say `disable` or mention a channel')
if(message1 == "disable") {
    let rol = db.get(`log_${message.guild.id}`)
    if(rol === null) {
        message.channel.send('Mod-log is not setted') 
    } else {
    db.delete(`log_${message.guild.id}`)
    message.channel.send('Succesful')
    }
} 
else {
    let ch = message.mentions.channels.first()
    db.set(`log_${message.guild.id}`, ch.id)
    message.channel.send(new Discord.MessageEmbed().setDescription(`Mod log setted to <#${ch.id}>`).setAuthor(message.author.username, message.author.avatarURL()))
}
};

module.exports.help = {
    name: 'mod-log',
    aliases: ['modlog', 'log']
};
