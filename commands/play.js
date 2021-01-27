const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let VC = message.member.voice.channel;
    if (!message.member.voice.channel) return [message.channel.send(`${message.author}, You must join a voice channel to use this command`)];
    let url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    let pl = /^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/
    var ffmpegargs = "asetrate=44100";
    let searchString = args.join(' ');
    if (!url || !searchString) return [message.channel.send(`${message.author}, Please enter URL/Search string`)];

    if (url.match(pl)) {
        let playlist = await client.youtube.getPlaylist(url);
        let videos = await playlist.getVideos();

        for (const vid of Object.values(videos)) {
            let video = await client.youtube.getVideoByID(vid.id)
            await client.handleVideo(video, ffmpegargs, message, VC, true)
        }

        return message.channel.send(`Added \`${playlist.title}\` To Queue!`);
    } else {

        try {
            var video = await client.youtube.getVideo(url);
        } catch (err) {
            if (err) undefined;
            try {
                var vid = await client.youtube.searchVideos(searchString, 1);
                var video = await client.youtube.getVideoByID(vid[0].id);
            } catch (err) {
                console.error(err);
            }
        }
        return client.handleVideo(video, ffmpegargs, message, VC);  
    }
};
module.exports.help = {
    name: 'play',
    aliases: ['p','çal']
};