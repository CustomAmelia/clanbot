const Discord = require('discord.js');
const client = new Discord.Client();
const filterwebhook = new Discord.WebhookClient('746106311690682479', 'AihY-SOWd8-3Fjnt1Sj7_Ao01Djb5brGzYTW16mMeKZd-U435u6OEU4Eys-8USuZyjDa')
const badwords = ['testing']

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

client.on('message', message => {
    for (var i = 0; i < badwords.length; i++) {
    if (message.content.includes(badwords[i])) {
    const epicembed = new Discord.MessageEmbed()
    epicembed.setTitle("Filter Alert.")
    epicembed.addField('User who said the word:', `${message.author}`)
    epicembed.addField('Message:', `${message.content}`)
    epicembed.setAuthor(`iG Studios Filter`, 'https://i.imgur.com/Ywo5GEv.png')
    filterwebhook.send(epicembed)
    message.reply("Please do not say that!")
    message.delete()
    }
    }
})

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity("iGottic's Youtube Channel.  -help for commands.", { type: "WATCHING"})
});

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