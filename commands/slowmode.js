const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: "lolok",
    execute(message, client, args){
        if (message.member.hasPermission('KICK_MEMBERS')) {

            if (!args) return;
            if (!args[0]) return;

            message.channel.setRateLimitPerUser(args[0])
        }
    }
}