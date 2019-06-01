const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("No messgae me!");
  client.user.setStatus("Idle");
});

client.on('message', msg => {
  if (msg.content === 'nitro') {
    msg.reply('Nuti dau is zgarcit :)))! <a:2234_nitro:584309367029891072>');
  }
   if (msg.content === 'emoji') {
    msg.reply('<a:PartyGlasses:584309775936782351><a:PartyGlasses:584309775936782351><a:PartyGlasses:584309775936782351><a:PartyGlasses:584309775936782351><a:PartyGlasses:584309775936782351><a:PartyGlasses:584309775936782351><a:PartyGlasses:584309775936782351>');
  }
});

client.login('NTg0MzI1MDIzNTUzMjkwMjY0.XPJRNw.BLXDq83U9nFZl02kz0f-ID0yczM');
