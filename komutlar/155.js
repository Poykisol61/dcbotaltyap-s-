const Discord = require("discord.js")

exports.run = (client, args, msg) => {
let embed = new Discord.MessageEmbed();
.setTitle(`FBI AÇ KAPIYI ${msg.author.name}!!!!`)
.setDescription("Tutuklandın :(")
.setImage("https://c.tenor.com/1AhUNYnySx4AAAAd/f-bi-raid.gif")
.setColor("RANDOM")
.setFooter(msg.author.AvatarURL + "D:")
msg.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "fbi",
  description: "fbi ararsınız",
  usage: "fbi"
};
