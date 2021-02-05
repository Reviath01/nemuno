const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission('BAN_MEMBERS')) return [message.channel.send(`You don't have enough permission to run this command`)];
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let reason = args.slice(1).join(' ');

    if(!user) return message.channel.send('Please specify user to perform action upon.');
    if(!reason){
      reason = "Unspecified";
    }
    if (!message.guild.member(user).bannable) return message.reply(`I don't have enough permission`);

    await message.guild.members.ban(user, {days: 7, reason: reason});
    await message.channel.send(`<@${user.id}> \`(${user.tag})\` Has been banned with reason: \`${reason}\` \nModerator: <@${message.author.id}>`);
};

module.exports.help = {
    name: 'ban',
    aliases: []
};
