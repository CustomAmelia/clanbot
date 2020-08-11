const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '>';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity('Heaven Sounds >cmds for commands!', { type: "LISTENING"})
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'cute'){
        client.commands.get('aww').execute(message, args);
    } 

    if(command === 'blursedimage'){
        client.commands.get('blursed').execute(message, args);
    } 

    if(command === 'unfunnymeme'){
        client.commands.get('ufunnymeme').execute(message, args);
    } 

    if(command === 'die'){
        client.commands.get('diee').execute(message, args);
    } 

    if(command === 'help'){
        client.commands.get('helpp').execute(message, args);
    } 

    if(command === 'info'){
        client.commands.get('infohelp').execute(message, args);
    } 

    if(command === 'mildlyinfuriating'){
        client.commands.get('aight').execute(message, args);
    } 

    if(command === 'kill'){
        client.commands.get('killl').execute(message, args);
    } 

    if(command === 'meme'){
        client.commands.get('meme').execute(message, args);
    } 

    if(command === 'server'){
        client.commands.get('support').execute(message, args);
    } 
});

client.login('NzQwNzUwNDAwODAxNzM0NzA4.Xytjkg.rqTQawZJ4YJ9vOSc9vBb5_tCkVQ');