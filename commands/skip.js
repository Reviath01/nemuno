exports.run = async (client, message, args) => {
    let userVoiceChannel = message.member.voice.channel;
    if (!userVoiceChannel) return;
    let clientVoiceConnection = message.guild.voice.connection;
    if (userVoiceChannel !== clientVoiceConnection.channel) return [message.channel.send(`${message.author}, I'm in another channel`)]
    let queue = client.queue.get(message.guild.id);
    if (!queue) return [message.channel.send(`${message.author}, No music to skip`)];
  else 
    return queue.connection.dispatcher.end();
}
module.exports.help = {
    name: 'skip',
    aliases: ['geç','s','g']
};
