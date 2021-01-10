module.exports = {

    message: (client, settings, Discord) => {
        client.on('message', async message => {
            if (message.content === '<@!797421915152449537>') {
                const tagged = new Discord.MessageEmbed()
                .setTitle('Nemuno')
                .setDescription(`Hello <@${message.author.id}>, My prefix is \`-\` you can use \`-help\` command to my commands`)
                .setColor(0xfffa00)
                .addField('Do you want to invite me!', "`-invite`")
                message.channel.send(tagged)
              }
            if(message.author.id === client.user.id) return; 
            if(!message.guild) return client.channels.cache.get('790640302452375562').send(`<@${message.author.id}>\`(${message.author.tag})\` sent a dm to me \nthe message is \`${message}\``);
            var prefix = settings.prefix;
            let args = message.content.slice(prefix.length).trim().split(' ');
            let cmd = args.shift().toLowerCase();
            let command;
            if (!message.content.startsWith(prefix)) return;
            if (client.commands.has(cmd)) {
                command = client.commands.get(cmd);
            } else if (client.aliases.has(cmd)) {
                command = client.commands.get(client.aliases.get(cmd));
            }
                try {
                    command.run(client, message, args);
                } catch (err) {
                    if (err) return undefined;
                }
        });
    }
}
