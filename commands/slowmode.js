const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: "lolok",
    execute(message, client, args){
        if (message.author.id === '498097065264676864') {
            message.channel.rateLimitPerUser(5)
        }
    }
}