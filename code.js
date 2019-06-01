const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'nitro') {
    msg.reply('Nuti dau is zgargit :)))! <a:2234_nitro:584309367029891072>');
  }
});

client.login('NTg0MzI1MDIzNTUzMjkwMjY0.XPJRNw.BLXDq83U9nFZl02kz0f-ID0yczM');
