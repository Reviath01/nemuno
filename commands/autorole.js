const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let message1 = args[0]
    if(!message1) return message.channel.send('You need to say `disable` or mention a role')
if(message1 == "disable") {
    let rol = db.get(`role_${message.guild.id}`)
    if(rol === null) {
        message.channel.send('Auto role is not setted!') 
    } else {
    db.delete(`role_${message.guild.id}`)
    message.channel.send('Succesful')
    }
} 
else {
    let role = message.mentions.roles.first()
    db.set(`role_${message.guild.id}`, role.id)
    message.channel.send(new Discord.MessageEmbed().setDescription(`Auto role setted to <@${role.id}>`).setAuthor(message.author.username, message.author.avatarURL()))
}
};

module.exports.help = {
    name: 'auto-role',
    aliases: ['autorole', 'otorole','oto-role']
};
