const Discord = require('discord.js');

exports.run = async(client, message, args) => {
let photo = ["https://images8.alphacoders.com/444/thumb-350-444589.jpg", "https://i.pinimg.com/originals/28/b5/35/28b5354d12adf7a4e64e6e6956292cf9.jpg", "https://wallpapercave.com/wp/wp1609673.jpg", "https://lh3.googleusercontent.com/proxy/0HGN4X0bUqG632oIDofyYCoFoPI70F3b_NS3rH4lL-zkXfMvIsyxpA6sFHAJ8wT5J4OH5mM0yVRoi95jt4ga0eWryA", "https://static.zerochan.net/Yakumo.Yukari.full.1183714.jpg", "https://c4.wallpaperflare.com/wallpaper/203/271/790/cirno-touhou-clouds-crystal-wings-wallpaper-preview.jpg", "https://c4.wallpaperflare.com/wallpaper/395/471/781/anime-touhou-nitori-kawashiro-wallpaper-preview.jpg", "https://images3.alphacoders.com/673/673450.jpg", "https://images8.alphacoders.com/675/675097.jpg", "https://images7.alphacoders.com/848/thumb-350-848684.png", "https://static.zerochan.net/Tsukumo.Benben.full.1606421.jpg", "https://wallup.net/wp-content/uploads/2016/05/14/52971-anime-Touhou-Chen-748x468.png","https://static.zerochan.net/Clownpiece.full.2064240.jpg", "https://images6.alphacoders.com/515/thumb-1920-515681.jpg", "https://wi.wallpapertip.com/wsimgs/5-57609_doremy-sweet.jpg", "https://s1.zerochan.net/Ebisu.Eika.600.2563432.jpg", "https://static.zerochan.net/Yagokoro.Eirin.full.654945.jpg", "https://i.pinimg.com/236x/9a/2a/4d/9a2a4daae107df78ca2e4747f322ad25.jpg", "https://i.pinimg.com/originals/89/e0/95/89e0955571a0c2702951ec7d43332d99.jpg", "https://static.zerochan.net/Elly.full.1648977.jpg", "https://images3.alphacoders.com/200/thumb-1920-200245.png", "https://i.pinimg.com/originals/eb/71/81/eb71814a2c9c219b2d912529431aac74.jpg", "https://images4.alphacoders.com/724/thumb-1920-724263.png", "https://static.zerochan.net/Alice.Margatroid.full.1056593.jpg","https://images5.alphacoders.com/673/thumb-1920-673446.jpg","https://static.zerochan.net/Himekaidou.Hatate.full.1904619.jpg", "https://i.pinimg.com/originals/92/7b/58/927b584668484f2c519ad0f8f32b4666.jpg","https://c4.wallpaperflare.com/wallpaper/957/434/474/anime-touhou-hieda-no-akyuu-wallpaper-preview.jpg","https://cdn.suwalls.com/wallpapers/games/hina-kagiyama-touhou-project-17797-2880x1800.jpg","https://images3.alphacoders.com/174/thumb-350-174969.jpg"]
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
if(random == "https://images8.alphacoders.com/675/675097.jpg") {
    message1 = "Alice Margatroid"
}
if(random == "https://images7.alphacoders.com/848/thumb-350-848684.png") {
    message1 = "Aya Shameimaru"
}
if(random == "https://static.zerochan.net/Tsukumo.Benben.full.1606421.jpg") {
    message1 = "Benben Tsukumo"
}
if(random == "https://wallup.net/wp-content/uploads/2016/05/14/52971-anime-Touhou-Chen-748x468.png") {
    message1 = "Chen"
}
if(random == "https://static.zerochan.net/Clownpiece.full.2064240.jpg") {
    message1 = "Clownpiece"
}
if(random == "https://images6.alphacoders.com/515/thumb-1920-515681.jpg") {
    message1 = "Daiyousei"
}
if(random == "https://wi.wallpapertip.com/wsimgs/5-57609_doremy-sweet.jpg") {
    message1 = "Doremy Sweet"
}
if(random == "https://s1.zerochan.net/Ebisu.Eika.600.2563432.jpg") {
    message1 = "Eika Ebisu"
}
if(random == "https://static.zerochan.net/Yagokoro.Eirin.full.654945.jpg") {
    message1 = "Eirin Yagokoro"
}
if(random == "https://i.pinimg.com/236x/9a/2a/4d/9a2a4daae107df78ca2e4747f322ad25.jpg") {
    message1 = "Elis"
}
if(random == "https://i.pinimg.com/originals/89/e0/95/89e0955571a0c2702951ec7d43332d99.jpg") {
    message1 = "Ellen"
}
if(random == "https://static.zerochan.net/Elly.full.1648977.jpg") {
    message1 = "Elly"
}
if(random == "https://images3.alphacoders.com/200/thumb-1920-200245.png") {
    message1 = "Fujiwara no Mokou"
}
if(random == "https://i.pinimg.com/originals/eb/71/81/eb71814a2c9c219b2d912529431aac74.jpg") {
    message1 = "Gengetsu"
}
if(random == "https://images4.alphacoders.com/724/thumb-1920-724263.png") {
    message1 = "Genjii"
}
if(random == "https://static.zerochan.net/Alice.Margatroid.full.1056593.jpg") {
    message1 = "Goliath Doll"
}
if(random == "https://images5.alphacoders.com/673/thumb-1920-673446.jpg") {
    message1 = "Hata no Kokoro"
}
if(random == "https://static.zerochan.net/Himekaidou.Hatate.full.1904619.jpg") {
    message1 = "Hatate Himekaidou"
}
if(random == "https://i.pinimg.com/originals/92/7b/58/927b584668484f2c519ad0f8f32b4666.jpg") {
    message1 = "Hecatia Lapislazuli"
}
if(random == "https://c4.wallpaperflare.com/wallpaper/957/434/474/anime-touhou-hieda-no-akyuu-wallpaper-preview.jpg") {
    message1 = "Hieda no Akyuu"
}
if(random == "https://cdn.suwalls.com/wallpapers/games/hina-kagiyama-touhou-project-17797-2880x1800.jpg") {
    message1 = "Hina Kagiyama"
}
if(random == "https://images3.alphacoders.com/174/thumb-350-174969.jpg") {
    message1 = "Hong Meiling"
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
