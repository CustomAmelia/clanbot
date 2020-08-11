const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'diee',
    description: "hi",
    execute(message, args){
        const gunembed = new Discord.MessageEmbed()
        const knifeembed = new Discord.MessageEmbed()
        message.channel.send(`${message.author} How would you like to die? React to your message with the gun emoji to be shot or knife emoji to be stabbed.`)
        message.react('🔫')
        message.react('🔪')

        const filter = (reaction, user) => {
            return ['🔫', '🔪'].includes(reaction.emoji.name) && user.id === message.author.id;
                };

                message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

        if (reaction.emoji.name === '🔫') {
            gunembed.setTitle('Uh Oh!')
            gunembed.addField('You were shot in your stomach. You died.', `R.I.P ${message.author.username} ⚰️`)
            gunembed.setImage('https://i.imgur.com/4f9x6zq.png')
			message.channel.send(gunembed);
		} else { if(reaction.emoji.name === '🔪') {
            knifeembed.setTitle('Uh Oh!')
            knifeembed.addField(`You were stabbed three times! You died.`, `R.I.P ${message.author.username} ⚰️`)
            knifeembed.setImage('https://i.etsystatic.com/19599984/r/il/07a1f6/2368992421/il_570xN.2368992421_4iey.jpg')
            message.channel.send(knifeembed)
            .catch(collected => {
                message.reply('You did not react.');
            });
        }
    }
	})
    }
} 