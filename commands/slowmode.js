const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: "lolok",
    execute(message, client, args){
        if (message.author.id === '498097065264676864' || message.author.id === '266330174948114434' || message.author.id === '400725779006357505' || message.author.id === '492816088724144138') {

            if (!args) return;
            if (!args[0]) return;
            if (args[0].length > 3) {
                message.channel.send('You cannot make a channels slowmode more than 5 minutes.')
            }

            if (args[0].length === 3) {
                message.channel.send('You cannot make a channels slowmode more than 5 minutes.')
            }

            if (args[0].length < 3) {
            message.channel.setRateLimitPerUser(args[0])
            }
        }
    }
}