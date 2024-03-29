const Discord = require('discord.js');
const client = new Discord.Client();

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

    if(command === 'slowmode'){
        client.commands.get('slowmode').execute(message, client, args)
    } 
})
client.login(process.env.token);