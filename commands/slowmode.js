const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: "lolok",
    execute(message, client, args){
        if (message.member.hasPermission('KICK_MEMBERS')) {

            let reason = args[1]

            if (!args) return;
            if (!reason) {
                reason == 'No reason provided!'
            }
            if (!args[0]) return;
            if (!args[1]) {
                reason == 'No reason provided!'
            }

            message.channel.setRateLimitPerUser(args[0], reason)
        }
    }
}