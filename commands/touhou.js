const Discord = require('discord.js');

exports.run = async(client, message, args) => {
let photo = ["https://images8.alphacoders.com/444/thumb-350-444589.jpg", "https://i.pinimg.com/originals/28/b5/35/28b5354d12adf7a4e64e6e6956292cf9.jpg", "https://wallpapercave.com/wp/wp1609673.jpg", "https://lh3.googleusercontent.com/proxy/0HGN4X0bUqG632oIDofyYCoFoPI70F3b_NS3rH4lL-zkXfMvIsyxpA6sFHAJ8wT5J4OH5mM0yVRoi95jt4ga0eWryA", "https://static.zerochan.net/Yakumo.Yukari.full.1183714.jpg", "https://c4.wallpaperflare.com/wallpaper/203/271/790/cirno-touhou-clouds-crystal-wings-wallpaper-preview.jpg", "https://c4.wallpaperflare.com/wallpaper/395/471/781/anime-touhou-nitori-kawashiro-wallpaper-preview.jpg", "https://images3.alphacoders.com/673/673450.jpg"]
var random = photo[Math.floor(photo.length * Math.random())];

if(random == "https://images8.alphacoders.com/444/thumb-350-444589.jpg") {
    message1 = "Sakuya İzayoi"
}
if(random == "https://i.pinimg.com/originals/28/b5/35/28b5354d12adf7a4e64e6e6956292cf9.jpg") {
    message1 = "Reimu Hakurei"
}
if(random == "https://wallpapercave.com/wp/wp1609673.jpg") {
    message1 = "Flandre Scarlet"
}
if(random == "https://lh3.googleusercontent.com/proxy/0HGN4X0bUqG632oIDofyYCoFoPI70F3b_NS3rH4lL-zkXfMvIsyxpA6sFHAJ8wT5J4OH5mM0yVRoi95jt4ga0eWryA") {
    message1 = "Remilia Scarlet"
}
if(random == "https://static.zerochan.net/Yakumo.Yukari.full.1183714.jpg") {
    message1 = "Yukari Yakumo"
}
if(random == "https://c4.wallpaperflare.com/wallpaper/203/271/790/cirno-touhou-clouds-crystal-wings-wallpaper-preview.jpg") {
    message1 = "Cirno"
}
if(random == "https://c4.wallpaperflare.com/wallpaper/395/471/781/anime-touhou-nitori-kawashiro-wallpaper-preview.jpg") {
    message1 = "Nitori Kawashiro"
}
if(random == "https://images3.alphacoders.com/673/673450.jpg") {
    message1 = "Marisa Kirisame"
}
const embed = new Discord.MessageEmbed()
.setDescription(message1)
.setImage(random)
.setColor('RANDOM')
.setAuthor(message.author.username, message.author.avatarURL())
message.channel.send(embed)
};

module.exports.help = {
    name: 'touhou',
    aliases: ['th']
};
