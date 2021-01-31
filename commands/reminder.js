const Discord = require('discord.js');
const ms = require('ms')
exports.run = async (client, message, args) => {
    let time = args[0]
    let mesaj = args.slice(1).join(' ')
message.channel.send(`I will remind you in ${time}`)
    setTimeout(function () {
        const embed = new Discord.MessageEmbed()
        .setDescription(`Reminder for <@${message.author.id}> \n\`${mesaj}\``)
        .setColor('RANDOM')
      message.channel.send(embed);
    }, ms(time));
}
    module.exports.help = {
       name: 'reminder',
       aliases: ['remind-me']
};
