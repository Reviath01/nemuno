module.exports = (client, ytdl, settings) => {
    client.handleVideo = async (video, ffmpegargs, message, vc, playlist = false) => {
        var ffmpegargs = ffmpegargs;
        let queue = client.queue.get(message.guild.id);
        let music = {
            id: video.id,
            title: video.title,
            url: `https://www.youtube.com/watch?v=${video.id}`,
            ffmpegargs: ffmpegargs
        };

        if (!queue) {
            let queueConstruct = {
                textChannel: message.channel,
                voiceChannel: vc,
                connection: null,
                musics: [],
                volume: 100,
                playing: true
            };
            client.queue.set(message.guild.id, queueConstruct);
            queueConstruct.musics.push(music);

            try {
                var connection = await vc.join();
                queueConstruct.connection = connection;
                client.play(message.guild, queueConstruct.musics[0]);
            } catch (err) {
                client.queue.delete(message.guild.id);
                console.error(`Error: ${err}`);
            }
        } else {
            queue.musics.push(music);
            if (playlist) return;
            else return message.channel.send(`Added \`${music.title}\` To Queue!`);
        }
        return;
    }

client.play = (guild, music) => {
    let queue = client.queue.get(guild.id);
    if (!music) {
        queue.voiceChannel.leave();
        client.queue.delete(guild.id);
        return queue.textChannel.send(`Music finished!`);
    }
    const stream = ytdl(music.url, {
        opusEncoded: true,
        encoderArgs: ['-af', `${music.ffmpegargs}`]
    });
    let dispatcher = queue.connection.play(stream, { type: "opus" })
        .on('finish', () => {
            queue.musics.shift();
            setTimeout(() => {
                client.play(guild, queue.musics[0]);
            }, 250);
        })
        .on('error', err => console.error(err));
    dispatcher.setVolumeLogarithmic(queue.volume / 100);
    queue.textChannel.send(`Playing \`${music.title}\` Now!`);
}
}
