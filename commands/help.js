const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'helpp',
    description: "hi",
    execute(message, args){
        const helpembed = new Discord.MessageEmbed()
        helpembed.setTitle('Help:')
        helpembed.setColor("RANDOM")
        helpembed.setDescription('Commands:')
        helpembed.addField('>mildlyinfuriating', 'Posts an image from r/mildlyinfuriating.')
        helpembed.addField('>die', 'Gives you the option to be shot or be stabbed.')
        helpembed.addField('>unfunnymeme', 'Posts an image from r/comedycemetery.')
        helpembed.addField('>blursedimage', 'Posts an image from r/blursedimages.')
        helpembed.addField('>help', 'Gives you a list of commands.')
        helpembed.addField('>server', 'Gives you the discord server invite for Holy Meme support.')
        helpembed.addField('>meme', 'Sends a random meme from r/memes.')
        helpembed.addField('>kill', 'Shoots the user you mention.')
        helpembed.addField('>info', 'Tells you information about the bot. Prefix, etc.')
        helpembed.addField('>cute', 'Sends a random image from r/aww.')
        helpembed.setAuthor('Bot Developer: CustomNate#0001', 'https://i.imgur.com/5USkTEP.gif')
        message.channel.send(helpembed)
    }
} 