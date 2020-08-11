const Discord = require('discord.js');
const bot = new Discord.Client();
const gotaww = require('got')

module.exports = {
    name: 'aww',
    description: "hi",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        gotaww('https://www.reddit.com/r/aww/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let awwUrl = `https://reddit.com${permalink}`;
            let awwImage = content[0].data.children[0].data.url;
            let awwTitle = content[0].data.children[0].data.title;
            let awwUpvotes = content[0].data.children[0].data.ups;
            let awwDownvotes = content[0].data.children[0].data.downs;
            let awwNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${awwTitle}`)
            embed.setURL(`${awwUrl}`)
            embed.setImage(awwImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${awwUpvotes} 👎 ${awwDownvotes} 💬 ${awwNumComments}`)
            message.channel.send(embed);
        })
    }
} 