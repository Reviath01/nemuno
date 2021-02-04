const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let category = args[0];

if (!category){
const embedhelp = new Discord.MessageEmbed()
.setTitle('Nemuno Help Menu!')
.addField("<a:developer:786112416567263262> Moderation Commands <a:developer:786112416567263262>", "Type `-help moderation` to see moderation commands")
.addField("<a:butterfly:797752340014694410> Fun Commands <a:butterfly:797752340014694410>", "Type `-help fun` to see fun commands")
.addField("<a:FeelsEveryone:721199565260193854> User Commands <a:FeelsEveryone:721199565260193854>", "Type `-help user` to see user commands")
.addField('For each command you can use', '-help {Command Name}')
.setColor(0x2ae82e)
.setThumbnail(client.user.displayAvatarURL())
message.channel.send(embedhelp)
}
else if (category == 'moderation'){
    const moderationembed = new Discord.MessageEmbed()
    .setTitle('Nemuno Moderation Menu!')
    .addFields(
        { name: '<a:developer:786112416567263262> -ban {User} {Reason}', value: 'Ban user from your guild!' },
        { name: '<a:developer:786112416567263262> -mute {User} {Duration} {Reason}', value: 'Give\'s muted role to user' },
        { name: '<a:developer:786112416567263262> -kick {User} {Reason}', value: 'Kick user from your guild!' },
        { name: '<a:developer:786112416567263262> -unmute {User}', value: 'Unmute\'s the user' },
        { name: '<a:developer:786112416567263262> -clear {Amount}', value: 'Delete\'s messages' },
        { name: '<a:developer:786112416567263262> -link {Allow or deny}', value: 'Deletes links' },
        { name: '<a:developer:786112416567263262> -slowmode {Amount}', value: 'Set\'s slowmode' },
        { name: '<a:developer:786112416567263262> -levelmessage {Enable or Disable or Set {New Message}}', value: 'Allow\'s you to disable or set new level up message' },
        { name: '<a:developer:786112416567263262> -welcome-message {Message}', value: 'Set welcome message for guild (use {mention} for mention and {username} for username)' },
        { name: '<a:developer:786112416567263262> -welcome-channel {Channel}', value: 'Set welcome channel to send welcome message' },
        { name: '<a:developer:786112416567263262> -leave-message {Message}', value: 'Set leave message for guild (use {mention} for mention and {username} for username)' },
        { name: '<a:developer:786112416567263262> -leave-channel {Channel}', value: 'Set leave channel to send leave message' },
        { name: '<a:developer:786112416567263262> -warn {User} {Message}', value: 'Warn user' },
        { name: '<a:developer:786112416567263262> -auto-role {Role}', value: 'Give\'s the role to new members' },
        { name: '<a:developer:786112416567263262> -mod-log {Channel}', value: 'Set\'s channel as mod-log' },
        { name: 'Do you have an issue', value: '[Create an issue](https://git.randomchars.net/leviathan/nemuno/-/issues/new)'}
    )
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(0xff0000)
    message.channel.send(moderationembed)
}
else if (category == 'fun'){
    const funembed = new Discord.MessageEmbed()
    .setTitle('Nemuno Fun Menu!')
    .addFields(
        { name: '<a:butterfly:797752340014694410> -avatar {User}', value: 'Show\'s the avatar' },
        { name: '<a:butterfly:797752340014694410> -kiss {User}', value: 'Kiss\'es the user that you mentioned' },
        { name: '<a:butterfly:797752340014694410> -hug {User}', value: 'You hug the user that you mentioned' },
        { name: '<a:butterfly:797752340014694410> -rank {User}', value: 'Show\'s rank of the user' },
		{ name: '<a:butterfly:797752340014694410> -play {Link or name}', value: 'Play\'s music' },
        { name: '<a:butterfly:797752340014694410> -skip', value: 'Skip\'s the current music' },
        { name: '<a:butterfly:797752340014694410> -touhou', value: 'Send\'s random touhou image' },
        { name: 'Do you have an issue', value: '[Create an issue](https://git.randomchars.net/leviathan/nemuno/-/issues/new)'}
    )
    .setColor(0xffa900)
    .setThumbnail(client.user.displayAvatarURL())
    message.channel.send(funembed)
}
else if (category == 'user'){
    const userembed = new Discord.MessageEmbed()
    .setTitle('Nemuno User Menu!')
    .addFields(
        { name: '<a:FeelsEveryone:721199565260193854> -stats', value: 'Show bot\'s stats' },
        { name: '<a:FeelsEveryone:721199565260193854> -invite', value: 'Send\'s the bots invite link' },
        { name: '<a:FeelsEveryone:721199565260193854> -whois', value: 'Give\'s user information' },
        { name: '<a:FeelsEveryone:721199565260193854> -server-info', value: 'Give\'s information about server' },
        { name: '<a:FeelsEveryone:721199565260193854> -afk', value: 'Set you as AFK' },
		{ name: '<a:FeelsEveryone:721199565260193854> -roles', value: 'Show\'s role list' },
      	{ name: '<a:FeelsEveryone:721199565260193854> -reminder', value: 'Remind\'s you' },
        { name: '<a:FeelsEveryone:721199565260193854> -server-settings', value: 'Show\'s server settings' },
          { name: 'Do you have an issue', value: '[Create an issue](https://git.randomchars.net/leviathan/nemuno/-/issues/new)'}
    )
    .setColor(0x5a99ff)
    .setThumbnail(client.user.displayAvatarURL());
    message.channel.send(userembed)
}
else if (category == 'ban'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Ban\'s the user that you mentioned')
    .addField('Correct Usage:', '-ban {User} {Reason}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'mute'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Gives muted role to user that you mentioned and')
    .addField('Correct Usage:', '-mute {User} {Duration} {Reason}')
    .addField('If you don\'t say duration,', 'duration will be 24h')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'kick'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Kick\'s the user that you mentioned')
    .addField('Correct Usage:', '-kick {User} {Reason}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'unmute'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Gets muted role from user')
    .addField('Correct Usage:', '-unmute {User}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'clear'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Delete\'s up to 99 messages')
    .addField('Correct Usage:', '-clear {Amount}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'link'){
    const embed = new Discord.MessageEmbed()
    .setDescription('If you deny links (-link deny) delete links sended to chat (Ignores person who has administrator permission)')
    .addField('Correct Usage:', '-link {Allow or deny}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'slowmode'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Set\'s slowmode')
    .addField('Correct Usage:', '-slowmode {Amount}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'levelmessage'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Allow\'s you to disable or set new level up message')
    .addField('Correct Usage:', '-levelmessage {Enable or Disable or Set {New Message}}')
    .addField('If you are setting new message you can mention user with {mention} and new level with {level}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'welcome-message'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Set\'s welcome message')
    .addField('Correct Usage:', '-welcome-message {Message}')
    .addField(`To mention the user type`, `{mention} \nFor example \`-welcome-message {mention} Welcome to the server!\``)
    .addField(`To show username of user type`, `{username} \nFor example \`-welcome-message {username} Welcome to the server!\``)
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'welcome-channel'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Set welcome channel to send welcome message')
    .addField('Correct Usage:', '-welcome-channel {Channel Mention}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'leave-message'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Set leave message')
    .addField('Correct Usage:', '-leave-message {Message}')
    .addField(`To mention the user type`, `{mention} \nFor example \`-leave-message {mention} Left the server!\``)
    .addField(`To show username of user type`, `{username} \nFor example \`-leave-message {username} Left the server\``)
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'leave-channel'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Set leave channel to send leave message')
    .addField('Correct Usage:', '-leave-channel {Channel Mention}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'avatar'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Show avatar of user')
    .addField('Correct Usage:', '-avatar {User}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'kiss'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Send kiss gif')
    .addField('Correct Usage:', '-kiss {User}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'hug'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Send hug gif')
    .addField('Correct Usage:', '-hug {User}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'rank'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Show\'s rank of user on that guild')
    .addField('Correct Usage:', '-rank {User}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'play'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Play some music!')
    .addField('Correct Usage:', '-play {Link or Name}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'skip'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Skip current music')
    .addField('Correct Usage:', '-skip')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'touhou'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Send\'s random touhou character')
    .addField('Correct Usage:', '-touhou')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'stats'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Show\'s stats of bot')
    .addField('Correct Usage:', '-stats')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'invite'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Send\'s invite link')
    .addField('Correct Usage:', '-invite')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'whois'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Whois a user')
    .addField('Correct Usage:', '-whois {User}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'server-info'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Send\'s server info')
    .addField('Correct Usage:', '-server-info')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'afk'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Set you as AFK')
    .addField('Correct Usage:', '-afk {Message}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'roles'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Show\'s all roles')
    .addField('Correct Usage:', '-roles')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'reminder'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Remind\'s you in time with your message')
    .addField('Correct Usage:', '-reminder {Time} {Message}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'warn'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Send your message to user as warning')
    .addField('Correct Usage:', '-warn {User} {Message}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'server-settings'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Show\'s server settings')
    .addField('Correct Usage:', '-server-settings')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'auto-role'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Give role for new members')
    .addField('Correct Usage:', '-auto-role {Role}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else if (category == 'mod-log'){
    const embed = new Discord.MessageEmbed()
    .setDescription('When message deleted, edited or channel renamed, deleted, created, etc. you will get notification')
    .addField('Correct Usage:', '-mod-log {Channel}')
    .setColor('RANDOM')
message.channel.send(embed)
}
else {
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Can\'t find command or category \`${category}\``)
    message.channel.send(embed)
}
};
  module.exports.help = {
    name: 'help',
    aliases: ['plshelp','h']
};
