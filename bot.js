const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
const moment = require('moment');
const ready = require('./events/ready');
const message = require('./events/message');
const settings = require('./settings.json');
const fs = require('fs');
const db = require('quick.db')
const ytdl = require('discord-ytdl-core');
const YouTube = require('simple-youtube-api');
require('./functions')(client, ytdl, settings);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
ready.ready(client);
message.message(client, settings, Discord);
client.youtube = new YouTube(settings.api); 
client.queue = new Map();

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) return console.log("There are no commands to load...");
    console.log(`Loading ${jsfiles.length} commands...`);
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
        });
    });  
});

client.loadCommand = (commandName) => {
    try {
        let props = require(`../commands/${commandName}`);
        if (props.init) props.init(client);
        client.commands.set(commandName, props);
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
        return false;
    } catch (err) {
        return [console.error(err)];
    }
};

client.unloadCommand = async (commandName) => {
    try {
        if (!commandName) return `\`${commandName}\` I can't find this command!`;

        if (commandName.shutdown) await commandName.shutdown(client);
        delete require.cache[require.resolve(`../commands/${commandName}.js`)];
        return false;
    } catch (err) {
        return [console.error(err)];
    }
};

client.on('guildMemberAdd', member => {
  const channel = db.get(`memberaddch_${member.guild.id}`)
if(channel === null) return;
let a = member.guild.channels.cache.get(channel)
let msg = db.get(`newmembermsg_${member.guild.id}`)
if(msg === null) {
msg = `Welcome to server <@${member.id}>`
}
a.send(msg ? msg.replace('{mention}', `${member}`).replace('{username}', `${member.user.username}`) : ``);
let role = db.get(`role_${member.guild.id}`)
if(!role) return;
let role2 = member.guild.roles.cache.get(role)
member.roles.add(role2)
});

client.on('guildMemberRemove', member => {
  const channel = db.get(`memberremovech_${member.guild.id}`)
if(channel === null) return;
let a = member.guild.channels.cache.get(channel)
let msg = db.get(`memberremovemsg_${member.guild.id}`)
if(msg === null) {
msg = `${member} left the server!`
}
a.send(msg ? msg.replace('{mention}', `${member}`).replace('{username}', `${member.user.username}`) : ``)
});

client.on("guildCreate", guild => {
const guildcreate = new Discord.MessageEmbed()
.setDescription(`I'm added to **${guild.name}**`)
.addField('Guild\'s owner:', guild.owner)
.addField('Guild member size:', guild.members.cache.size)
.setColor('RANDOM')
client.channels.cache.get('790640302452375562').send(guildcreate)
});

client.on("guildDelete", guild => {
const guilddelete = new Discord.MessageEmbed()
.setDescription(`I have kicked from **${guild.name}**`)
.addField('Guild\'s owner:', guild.owner)
.addField('Guild member size:', guild.members.cache.size)
.setColor('RANDOM')
client.channels.cache.get('790640302452375562').send(guilddelete)
});

client.on('channelCreate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`log_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
       .addField(`Channel created`, `Channel: <#${channel.id}>\nName: \`${channel.name}\`\nType: ${channel.type}\nID: ${channel.id}`)
       .setTimestamp()
       .setColor("RANDOM")
c.send(embed)
});

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`log_${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.MessageEmbed()
  .addField(`Channel deleted`, `Name: \`${channel.name}\`\nType: ${channel.type}\nID: ${channel.id}`)
  .setTimestamp()
  .setColor("RANDOM")
c.send(embed)
});

   client.on('channelNameUpdate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`log_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
        .addField(`Channel renamed`, `New name: \`${channel.name}\`\nID: ${channel.id}`)
        .setTimestamp()
        .setColor("RANDOM")
    c.send(embed)
});

client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`log_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
.addField(`Emoji created`, `Name: \`${emoji.name}\`\nID: ${emoji.id}`)
.setTimestamp()
.setColor("RANDOM")
    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`log_${emoji.guild.id}`));
  if (!c) return;
    let embed = new Discord.MessageEmbed()
.addField(`Emoji deleted`, `Name: \`${emoji.name}\`\nID: ${emoji.id}`)
.setTimestamp()
.setColor("RANDOM")
    c.send(embed)
    });
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(db.fetch(`log_${newEmoji.guild.id}`));
  if (!c) return;
let embed = new Discord.MessageEmbed()
.addField(`Emoji updated`, `Old name: \`${oldEmoji.name}\`\nNew name: \`${newEmoji.name}\`\nID: ${oldEmoji.id}`)
.setTimestamp()
.setColor("RANDOM")
    c.send(embed)
    });

client.on('guildBanAdd', async (guild, user) => {    
    const channel = guild.channels.cache.get(db.fetch(`log_${guild.id}`));
  if (!channel) return;
    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.tag}`, user.avatarURL())
                    .addField(`Member banned`, `<@${user.id}> \nName: \`${user.username}\`\nID: ${user.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
    channel.send(embed)
});


client.on('guildBanRemove', async (guild, user) => {    
    const channel = guild.channels.cache.get(db.fetch(`log_${guild.id}`));
  if (!channel) return;
    let embed = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}`, user.avatarURL())
      .addField(`Member unbanned`, `<@${user.id}> \nName: \`${user.username}\``)
      .setTimestamp()
      .setColor("RANDOM")
    channel.send(embed)
});
client.on('messageDelete', async message => {    
if(message.author.id == client.user.id) return;
    const channel = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`));
  if (!channel) return;
    let embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL())
            .setDescription(`Message sent by <@${message.author.id}> deleted!`)
            .addField(`Deleted message:`,`${message.content}`)
            .addField(`Channel:`,`<#${message.channel.id}> (\`${message.channel.name}\`)`)
            .setTimestamp()
            .setColor("RANDOM")
channel.send(embed)
});
client.on('messageUpdate', async(oldMessage, newMessage) => {
if(oldMessage.author.id == client.user.id) return;
    const channel = oldMessage.guild.channels.cache.get(db.fetch(`log_${oldMessage.guild.id}`));
    if(!channel) return;
    let embed = new Discord.MessageEmbed()
    .setDescription(`Message sent by <@${oldMessage.author.id}> edited!`)
    .addField("Old: ",`${oldMessage.content}`)
    .addField("New: ",`${newMessage.content}`)
    .addField("Channel: ",`<#${oldMessage.channel.id}> (${oldMessage.channel.name})`)
    .setTimestamp()
    .setColor("RANDOM")
    channel.send(embed)
});

client.on('roleCreate', async (role) => {    
    const channel = role.guild.channels.cache.get(db.fetch(`log_${role.guild.id}`));
  if (!channel) return;
    let embed = new Discord.MessageEmbed()
.addField(`Role created`, `Name: \`${role.name}\` ( <@&${role.id}> ) \nID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
.addField("Color: ",`${role.hexColor}`)
    channel.send(embed)
});

client.on('roleDelete', async (role) => {    
    const channel = role.guild.channels.cache.get(db.fetch(`log_${role.guild.id}`));
  if (!channel) return;
    let embed = new Discord.MessageEmbed()
.addField(`Role deleted`, `Name: \`${role.name}\` \nID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
.addField("Color",`${role.hexColor}`)
    channel.send(embed)
})
