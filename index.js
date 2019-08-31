//Welcome to The Viri Discord Bot!
//I made this so i could teach my self how discord bots work and How Discord.js Works 
//So if the code is terrible Don't Judge me 
//and Yes The Code is all in One Document; I dont know how to seprate the code into diffrent documets yet.
//im new to codeing in Javscript!

//*The code start Here*

//This Code is needed So The Bot Works And comes online!, and has the Bot Presence for Bot Activity!
require('dotenv').config()
const {Client, RichEmbed, Attachment } = require('discord.js');
const client = new Client();
const PREFEX = 'Viri ';
client.on('ready', message => {
    console.log('Logged in to Your Server!')
    console.log(`Logged in as ${client.user.tag}`)
    console.log('Thanks For using my Bot')
    console.log('//IronWolf\\')
    client.user.setActivity('So Open (feat. Eleanor Forte)', { type: 'LISTENING'});

});
//The Code Below Is for The Bot To Watch Chat So it's Aware What Been Typed and Respond Acordingly!
client.on('message', message => {
        let args = message.content.substring(PREFEX.length).split(" ");
        switch (args[0]) {
                case 'who':
                    if(args[1] === 'is')
                    if (args[2] === 'Ele.OS?')
                    message.reply('I don\'t know, lets ask the Trash Can!')
                    message.channel.send('Hey, Trash Can How You Been?')
                break;
                case 'whats':
                    if(args[1] === 'your')
                    if(args[2] === 'song?')
                    message.reply('That Would Be So Open, You can find it on Jake\'s Channel')
                break;
        }
})
//This String Needs To Be at The End So it Gets Your Logon Token (Placed In the .ENV File After the 'Bot_Token=', You Can Get a Bot Token By Going to discordapp.com/developers/applications/)
client.login(process.env.Bot_Token)