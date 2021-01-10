const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) return [message.channel.send(`You don't have permission`)];

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let reason = args.slice(1).join(' ');

    if(!user) return message.channel.send('Please mention user to kick.');
    if(!reason) {
      reason = "Unspecified"
    };
    if (!message.guild.member(user).kickable) return message.reply(`I don't have permission to kick this user`);
    
    
    await message.channel.send(`<@${user.id}> \`(${user.user.tag})\` Has been kicked with reason: \`${reason}\` \nModerator: <@${message.author.id}>`);
    await user.kick({reason: reason});
};

module.exports.help = {
    name: 'kick',
    aliases: ['']
};
