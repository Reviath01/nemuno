const db = require('quick.db')
module.exports = {

    message: (client, settings, Discord) => {
        client.on('message', async message => {
			message.mentions.users.forEach((user) => {
let afkreason = db.get(user.id + '.afkreason')
})
              if (message.channel.type === "dm") return;
  if(message.author.bot) return;  
  if (message.content.length > 7) {
    db.add(`xp_${message.author.id + message.guild.id}`, 3)
};
  if (db.fetch(`xp_${message.author.id + message.guild.id}`) > 150) {  
    db.add(`level_${message.author.id + message.guild.id}`, 1)
    db.delete(`xp_${message.author.id + message.guild.id}`)
  };
            if (message.content === '<@!797421915152449537>') {
                const tagged = new Discord.MessageEmbed()
                .setTitle('Nemuno')
                .setDescription(`Hello <@${message.author.id}>, My prefix is \`-\` \nYou can use \`-help\` command to my commands`)
                .setColor(0xfffa00)
                .addField('Do you want to invite me!', "`-invite`")
                message.channel.send(tagged)
              }
			   message.mentions.users.forEach((user) => {
  if (message.author.bot) return false;

  if (
   message.content.includes('@here') ||
   message.content.includes('@everyone')
  )
   return false;
  if (db.has(user.id + '.afk'))
   if(afkreason === null){
       afkreason = "AFK"
   }
   message.channel.send(`The user is AFK with reason: ${afkreason}`);
 });
  if (db.has(message.author.id + '.afk')) {
  message.channel.send(`Welcome back <@${message.author.id}> I removed your AFK.`);
  db.delete(message.author.id + '.afk');
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
