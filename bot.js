const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});


client.on('ready', async() => {
var server = "508665667776675841"; // ايدي السررفر
var channel = "508665667776675845";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , ')
    },305);
})

client.login('NTA4NjcwNDQ4MDQ1Nzg1MDk5.DsCoMw.Oqq1PJfbvqP2aq9NyEQeiwAg6yw');
