const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    message.channel.send(`:ping_pong: API Latency is ${Math.round(client.ws.ping)}ms`);
}

  module.exports.help = {
    name: 'ping',
    aliases: ['latency']
};
