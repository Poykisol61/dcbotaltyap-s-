const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "ID niz buraya") return message.reply('Bunu Sadece Sahibim Kullanabilir');

  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField(':warning: Uyarı :warning:', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Göndereceğim mesajı yaz');
  if (message.mentions.users.cache.size < 1) return message.reply('Kime Mesaj Göndereceğim yaz veya etiketle.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Sahibimden Bir Mesajın Var")
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'mesajat',
  description: 'Bir kullanıcıya özelden mesaj yollar.',
  usage: 'mesajat'
};