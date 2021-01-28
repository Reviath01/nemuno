const Discord = require('discord.js');
const ms = require("ms");

exports.run = async(client, message, args) => {

    let spammer = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if(!spammer) return message.channel.send("Please specify user to perform action upon.");
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Lacking permission to perform such action.");
    let role = message.guild.roles.cache.find(r => r.name === "Muted");
    
    if(!role){
      try{
        role = await message.guild.roles.create({data:{

          name: "Muted",
          color: "#818080",
          permissions:[]}
        })
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.updateOverwrite(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    
    if (spammer.roles.cache.has(role.id)) return message.channel.send('User is already muted.');
    let time = args[1];
    let reason = args.slice(2).join(' ');
    if(!time) {
	  reason = args.join(' ')
      time = "24h"
    };
    if(!reason) {
      reason = "Unspecified"
    }

    await(spammer.roles.add(role.id));
    await message.channel.send(`Muted User: <@${spammer.id}> \nDuration: \`${ms(ms(time))}\` \nReason: \`${reason}\``);

    setTimeout(function () {
      if (!spammer.roles.cache.has(role.id))
        return;
      spammer.roles.remove(role.id);
      message.channel.send(`<@${spammer.id}> can speak again.`);
    }, ms(time));
};

module.exports.help = {
    name: 'mute',
    aliases: [`tempmute`]
};
