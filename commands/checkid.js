const Discord = require('discord.js');
const snekfetch = require('snekfetch')

module.exports = {
    name: 'check',
    description: "test",
    execute(message, client, args){
        if (!args[0]) {
            message.channel.send('Please provide a user id.')
        }

        const api = `https://verify.eryn.io/api/roblox/${args[0]}`
        snekfetch.get(api).then(console.log)
    }
} 