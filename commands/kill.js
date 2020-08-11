const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'killl',
    description: "hi",
    execute(message, args){
const user = message.mentions.users.first();
const dethembed = new Discord.MessageEmbed()
dethembed.setTitle('***BANG BANG!***')
dethembed.setDescription('**🔫**')
dethembed.addField(`You gunned down ${user.username}!`, `R.I.P ${user.username} ⚰️`)
dethembed.setImage('https://i.imgur.com/17cq9ZL.png')
dethembed.setColor('RANDOM')
message.channel.send(dethembed)
    }
} 