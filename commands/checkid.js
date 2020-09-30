const Discord = require('discord.js');
const snekfetch = require('snekfetch')

module.exports = {
    name: 'check',
    description: "test",
    execute(message, client, args){
        const api = `https://verify.eryn.io/api/roblox/${args[0]}`
        snekfetch.get(api).then(console.log(Response))
    }
} 