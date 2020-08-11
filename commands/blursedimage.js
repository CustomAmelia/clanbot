const Discord = require('discord.js');
const bot = new Discord.Client();
const gotblursed = require('got')

module.exports = {
    name: 'blursed',
    description: "hi",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        gotblursed('https://www.reddit.com/r/blursedimages/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let blursedUrl = `https://reddit.com${permalink}`;
            let blursedImage = content[0].data.children[0].data.url;
            let blursedTitle = content[0].data.children[0].data.title;
            let blursedUpvotes = content[0].data.children[0].data.ups;
            let blursedDownvotes = content[0].data.children[0].data.downs;
            let blursedNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${blursedTitle}`)
            embed.setURL(`${blursedUrl}`)
            embed.setImage(blursedImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${blursedUpvotes} 👎 ${blursedDownvotes} 💬 ${blursedNumComments}`)
            message.channel.send(embed);
        })
    }
} 