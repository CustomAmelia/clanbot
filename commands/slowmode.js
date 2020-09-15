const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: "lolok",
    execute(message, client, args){
        if (message.author.id === '498097065264676864' || message.author.id === '266330174948114434' || message.author.id === '400725779006357505' || message.author.id === '400725779006357505') {

            if (!args) return;
            if (!args[0]) return;

            message.channel.setRateLimitPerUser(args[0])
        }
    }
}