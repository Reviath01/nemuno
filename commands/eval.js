const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
if(!settings.author.includes(message.author.id)) return;
try {
  const code = args.join(" ");
  let evaled = eval(code);

  if (typeof evaled !== "string")
    evaled = require("util").inspect(evaled);

  message.channel.send(evaled, {code:"xl"});
} catch (err) {
  message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
}
}
module.exports.help = {
    name: 'eval',
    aliases: ['run']
};
