const Discord = require('discord.js');
const ms = require('ms')
exports.run = async (client, message, args) => {
    let time = args[0]
    let mesaj = args.slice(1).join(' ')
message.channel.send(`I will remind you in ${time}`)
    setTimeout(function () {
      message.channel.send(`Reminder for <@${message.author.id}> \n\`${mesaj}\``);
    }, ms(time));
}
    module.exports.help = {
       name: 'reminder',
       aliases: ['remind-me']
};
