
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');
const moment = require('moment');
const ready = require('./events/ready');
const message = require('./events/message');
const settings = require('./settings.json');
const fs = require('fs');
const db = require('quick.db')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
ready.ready(client);
message.message(client, settings, Discord);

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
