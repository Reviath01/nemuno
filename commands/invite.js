const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    const inviteembed = new Discord.MessageEmbed()
    .setTitle('Here is my invite link!')
    .setAuthor(`${message.author.username}`,message.author.avatarURL({dynamic : true, size: 4096}))
    .setDescription('[Click here to invite me!](https://discordapp.com/oauth2/authorize?client_id=797421915152449537&scope=bot&permissions=8)')
    .setColor(0x27ffe1)
    message.channel.send(inviteembed)
}
module.exports.help = {
    name: 'invite',
    aliases: ['inv']
};
