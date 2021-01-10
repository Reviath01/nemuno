const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    if(!settings.author.includes(message.author.id)) return message.channel.send('You don\'t have permission to run this command');
    let spammer = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    spammer.send(args.slice(1).join(' '));
    message.channel.send(`I sent your message :thumbsup:`)
}

  module.exports.help = {
    name: 'dm',
    aliases: ['senddm']
};
