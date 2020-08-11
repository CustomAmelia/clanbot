const Discord = require('discord.js');
const bot = new Discord.Client();
const gotcemetry = require('got')

module.exports = {
    name: 'ufunnymeme',
    description: "hi",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        gotcemetry('https://www.reddit.com/r/ComedyCemetery/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let cursedUrl = `https://reddit.com${permalink}`;
            let cursedImage = content[0].data.children[0].data.url;
            let cursedTitle = content[0].data.children[0].data.title;
            let cursedUpvotes = content[0].data.children[0].data.ups;
            let cursedDownvotes = content[0].data.children[0].data.downs;
            let cursedNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${cursedTitle}`)
            embed.setURL(`${cursedUrl}`)
            embed.setImage(cursedImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${cursedUpvotes} 👎 ${cursedDownvotes} 💬 ${cursedNumComments}`)
            message.channel.send(embed);
        })
    }
} 