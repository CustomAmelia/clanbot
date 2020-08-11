const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "helps you",
    execute(message, client, args){
        const commands = new Discord.MessageEmbed()
        commands.setTitle('Commands:')
        commands.addField('-help', 'Gives you a list of commands.')
        commands.addField('-apply', 'Sends you the link to become an Official Clan.')
        commands.addField('-credits', 'Shows the bot credits.')
        commands.setColor('#63ace5')
        message.channel.send(commands)
    }
} 