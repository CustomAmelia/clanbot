const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'infohelp',
    description: "hi",
    execute(message, args){
        const infohelpembed = new Discord.MessageEmbed()
        infohelpembed.setTitle('Bot Information')
        infohelpembed.setDescription('Here is where you will find information about the bot. Prefix, etc.')
        infohelpembed.addField('Prefix', 'The prefix for this bot is: >')
        infohelpembed.setColor('RANDOM')
        message.channel.send(infohelpembed)
    }
} 