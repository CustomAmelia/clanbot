const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'support',
    description: "hi",
    execute(message, args){
        let coolembed = new Discord.MessageEmbed()
        .setTitle('Support Server')
        .setDescription('Join the official discord server for Holy Meme for upcoming updates, updates and help. https://discord.gg/DN25wz')
        .setURL('https://discord.gg/DN25wz')
        .setImage('https://i.imgur.com/4tzOfoQ.png')
        .setColor("RANDOM")
        message.channel.send(coolembed)
        }
    }