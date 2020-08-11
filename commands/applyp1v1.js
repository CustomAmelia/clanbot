const Discord = require('discord.js');

module.exports = {
    name: 'application',
    description: "gives u app stuff",
    execute(message, client, args){
        const embed = new Discord.MessageEmbed()
        embed.setTitle('Official Clan Application')
        embed.setURL('https://docs.google.com/forms/d/e/1FAIpQLScnzQ9irXC7NQ6oFJZ6h8qonbguXobMg8ul1zdayEKwbKYW6A/viewform')
        embed.setDescription('Application to become an Official Clan.')
        embed.addField('https://docs.google.com/forms/d/e/1FAIpQLScnzQ9irXC7NQ6oFJZ6h8qonbguXobMg8ul1zdayEKwbKYW6A/viewform', 'This is the url for the application form to become an Official Clan.')
        embed.setColor('#63ace5')
        message.channel.send(`${message.author} Application sent in dms.`)
        message.author.send(embed).catch(err =>{
            if (err) {
                message.channel.send(`${message.author} Sorry! I cannot direct message you because your dms are off or that you have been banned/kicked in this discord server before (it's a discord bug, i can't do anything about it.) To still see the the application, dm CustomNate or use this link: https://docs.google.com/forms/d/e/1FAIpQLScnzQ9irXC7NQ6oFJZ6h8qonbguXobMg8ul1zdayEKwbKYW6A/viewform .`)
            }
        })
    }
};