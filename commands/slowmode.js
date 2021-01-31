const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
      message.channel.send('You need to specify a duration')
          }
if (limit > 10) {
    return message.channel.send('Maximum limit is 10 seconds!')
}
const embed2 = new Discord.MessageEmbed()
.setDescription(`Slowmode setted to ${limit}`)
    message.channel.send(embed2)
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
module.exports.help = {
    name: 'slowmode',
    aliases: ['sm']
};
