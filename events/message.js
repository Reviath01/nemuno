const db = require('quick.db')
module.exports = {

    message: (client, settings, Discord) => {
        client.on('message', async message => {
			let linkblock = db.get(`link_${message.guild.id}`)
			if(linkblock == "deny") {
				const reklam = ["https://","http://","discord.gg"];
              if (reklam.some(word => message.content.toLowerCase().includes(word))) {
                try {
                  if (!message.member.hasPermission("ADMINISTRATOR")) {                                       
                    message.channel.send(`<@${message.author.id}> you are not allowed to send links on this server!`).then(message => message.delete(10000));
                  message.delete();
				  }              
                } catch(err) {
                  console.log(err);
                }
              }
			}
              if (message.channel.type === "dm") return;
  if(message.author.bot) return;  
  if (message.content.length > 7) {
    db.add(`xp_${message.author.id + message.guild.id}`, 3)
};
  if (db.fetch(`xp_${message.author.id + message.guild.id}`) > 149) {  
    db.add(`level_${message.author.id + message.guild.id}`, 1)
    db.delete(`xp_${message.author.id + message.guild.id}`)
message.channel.send(`<@${message.author.id}> is now ${db.get(`level_${message.author.id + message.guild.id}`)} level :tada:`)
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
   let afkreason = db.get(user.id + message.guild.id + '.afkreason')
   if(afkreason === null){
       afkreason = "AFK"
   }
  if (db.has(user.id + message.guild.id + '.afk'))
   message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`This user is AFK with reason ${afkreason}`).setAuthor(message.author.username, message.author.avatarURL()));
 });
  if (db.has(message.author.id + message.guild.id + '.afk')) {
  message.channel.send(`Welcome back <@${message.author.id}> I removed your AFK.`);
  db.delete(message.author.id + message.guild.id + '.afk');
  db.delete(message.author.id + message.guild.id + '.afkreason');
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
