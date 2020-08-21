const Discord = require('discord.js');
const client = new Discord.Client();
const filterwebhook = new Discord.WebhookClient('746106311690682479', 'AihY-SOWd8-3Fjnt1Sj7_Ao01Djb5brGzYTW16mMeKZd-U435u6OEU4Eys-8USuZyjDa')
const badwords = ['faggot',  'nigga', 'nigger']

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity("iGottic's Youtube Channel.  -help for commands.", { type: "WATCHING"})
});

client.on('message', message => {
        if(message.channel.type == "text" && message.channel.name.toLowerCase() == "🌐╎eng-chat") {
            if (message.content.includes("https://")) {
                const epic2embed = new Discord.MessageEmbed()
                epic2embed.setTitle("Filter Alert: Link")
                epic2embed.addField('User who said the word:', `${message.author}`)
                epic2embed.addField('Message:', `${message.content}`)
                epic2embed.setColor("RANDOM")
                epic2embed.addField("Channel:", "#🌐╎eng-chat ")
                message.reply("No links.")
                filterwebhook.send(epic2embed)
                message.delete()
        }
    }
})

client.on('message', message => {
    if(message.channel.type == "text" && message.channel.name.toLowerCase() == "🌐╎eng-chat") {
        if (message.content.includes("http://")) {
            const epic2embed = new Discord.MessageEmbed()
            epic2embed.setTitle("Filter Alert: Link")
            epic2embed.addField('User who said the word:', `${message.author}`)
            epic2embed.addField('Message:', `${message.content}`)
            epic2embed.addField("Channel:", "#🌐╎eng-chat ")
            epic2embed.setColor("RANDOM")
            message.reply("No links.")
            filterwebhook.send(epic2embed)
            message.delete()
    }
}
})

client.on('message', message => {
    if(message.channel.type == "text" && message.channel.name.toLowerCase() == "🌐╎other-chat") {
        if (message.content.includes("http://")) {
            const epic2embed = new Discord.MessageEmbed()
            epic2embed.setTitle("Filter Alert: Link")
            epic2embed.addField('User who said the word:', `${message.author}`)
            epic2embed.addField('Message:', `${message.content}`)
            epic2embed.addField("Channel:", "#🌐╎other-chat ")
            epic2embed.setColor("RANDOM")
            message.reply("No links.")
            filterwebhook.send(epic2embed)
            message.delete()
    }
}
})

client.on('message', message => {
    if(message.channel.type == "text" && message.channel.name.toLowerCase() == "🌐╎other-chat") {
        if (message.content.includes("https://")) {
            const epic2embed = new Discord.MessageEmbed()
            epic2embed.setTitle("Filter Alert: Link")
            epic2embed.addField('User who said the word:', `${message.author}`)
            epic2embed.addField('Message:', `${message.content}`)
            epic2embed.addField("Channel:", "#🌐╎other-chat ")
            epic2embed.setColor("RANDOM")
            message.reply("No links.")
            filterwebhook.send(epic2embed)
            message.delete()
    }
}
})

client.on('message', message => {
        for (var i = 0; i < badwords.length; i++) {
        if (message.content.includes(badwords[i])) {
        const epicembed = new Discord.MessageEmbed()
        epicembed.setTitle("Filter Alert: Filtered Word")
        epicembed.addField('User who said the word:', `${message.author}`)
        epicembed.addField('Message:', `${message.content}`)
        epicembed.setColor("RANDOM")
        message.reply("Please do not say that!")
        filterwebhook.send(epicembed)
        message.delete()
        }
        }
    })

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, client, args);
    } 

    if(command === 'apply'){
        client.commands.get('application').execute(message, client, args);
    } 

    if(command === 'credits'){
        client.commands.get('credit').execute(message, client, args)
    } 
})
client.login(process.env.token);