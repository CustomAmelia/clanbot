const Discord = require('discord.js');
const snekfetch = require('snekfetch')

module.exports = {
    name: 'check',
    description: "test",
    execute(message, client, args){
        const api = `https://verify.eryn.io/api/user/498097065264676864`
        snekfetch.get(api).then(r => console.log(r))
    }
} 