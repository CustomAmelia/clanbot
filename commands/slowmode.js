const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: "lolok",
    execute(message, client, args){
        if (message.author.hasPermission('KICK_MEMBERS')) {
            message.channel.rateLimitPerUser(5)
        };
    }
}