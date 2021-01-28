const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    if(!message.author.hasPermission("ADMINISTRATOR")) return message.channel.send('You need administrator permission to use this command!')
let a = args.join(' ');
if(!a) return message.channel.send('Correct usage: -link {allow or deny}');
if(a == "deny") {
        db.set(`link_${message.guild.id}`, 'deny')
    message.channel.send('From now, the links will be deleted!')
	}
else if(a == "allow") {
    db.delete(`link_${message.guild.id}`)
	message.channel.send('From now, the links will not be deleted!')
} else {
    message.channel.send('Correct usage: -link {allow or deny}')
}
}
module.exports.help = {
    name: 'link',
    aliases: [`links`]
};
