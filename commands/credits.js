const Discord = require('discord.js');

module.exports = {
    name: 'credit',
    description: "credit go brrrr",
    execute(message, client, args){
        const creditss = new Discord.MessageEmbed()
        creditss.setTitle('Credits:')
        creditss.addField('Bot Developer', 'CustomNate#0001')
        creditss.setColor('#63ace5')
        message.channel.send(creditss)
    }
} 