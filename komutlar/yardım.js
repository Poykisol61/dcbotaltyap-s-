const Discord = require('discord.js');

exposts.run = (client, args, message) => {
let embed = new Discord.MessageEmbed()
.setTitle("Yardım menüsü")
.setDescription(`yardım
                yazdır
                
                düello
                adamasmaca
                fbi
                
                ban
                yetkilerim`)
.setFooter("Komutu kullanan kullanıcı: " + message.author.name + message.author.AvatarURL)                
}
exports.conf = {
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "yardım",
    description: "yardım menüsü"
};