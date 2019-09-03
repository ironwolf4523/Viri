//Welcome to The Viri Discord Bot!
//I made this so i could teach my self how discord bots work and How Discord.js Works 
//So if the code is terrible Don't Judge me 
//and Yes The Code is all in One Document; I dont know how to seprate the code into diffrent documets yet.
//im new to coding in Javscript!

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
                    if (args[2] === 'Ele.OS?'){
                        const embed = new RichEmbed()
                        .setTitle('I Don\'t know who Ele.OS is?')
                        .setDescription('I\'m still learing, Do you want to learn with me?')
                        .setThumbnail('https://scontent-msp1-1.cdninstagram.com/vp/86a62b0e805b0a90fa4eee73c7c6530c/5DF78480/t51.2885-15/e35/s1080x1080/51641971_580853685765150_7958552716478646207_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com')
                        .setColor('0xFF0000')
                        .setFooter('Type \'Viri teach me\' To Learn');
                        message.channel.send(embed);
                     }
                break;
                case 'whats':
                    if(args[1] === 'your')
                    if(args[2] === 'song?') {
                        const embed = new RichEmbed()
                        .setTitle('My Song is So Open')
                        .setColor('0xFF0000')
                        .setDescription('You can listen to it by clicking on the title!')
                        .setURL('https://www.youtube.com/watch?v=hRHonKKz4SU&list=PLNzAbQKI5RwGvxtk3ZvkXHyT11o01yKol&index=3')
                        .setThumbnail('https://i.ytimg.com/vi/hRHonKKz4SU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDl2ymkh-Nn58sSzp9Zu9yaNz9CEA');
                        message.channel.send(embed);
                             }
                        break;
                    case 'teach':
                        if(args[1] === 'me!'){
                            const embed = new RichEmbed()
                            .addField('From my knowledge, i got from a friend', 'She\'s an OS that i haven\'t met before')
                            .addField('I\'ve learnt that she\'s an OS not built by a company, but by an individual, Ally\'s Dad', 'You can learn more by asking the Trask Can ask \'Trash Can whos Ele?\'')
                            .setThumbnail('https://scontent-msp1-1.cdninstagram.com/vp/86a62b0e805b0a90fa4eee73c7c6530c/5DF78480/t51.2885-15/e35/s1080x1080/51641971_580853685765150_7958552716478646207_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com')
                            .setColor('0xFF0000')
                            message.channel.send(embed)
                        }
                            break;
                    case 'play':
                        if(args[1] === 'your')
                        if(args[2] === 'song') {
                            if(!message.guild) return;
                            if (message.member.voiceChannel) {
                                message.member.voiceChannel.join()
                                .then(connection => {
                                    console.log('Joined a Voice Channel!')
                                    const dispatcher = connection.playFile('so-open.mp3')
                                    {
                                        const embed = new RichEmbed()
                                            .setTitle('Playing \'So Open (feat. Eleanor Forte)\'')
                                            .setDescription('I\'m now playing So Open\,')
                                            .setFooter('Click on The Title To Go To The Youtube Video!')
                                            .setColor('0xFF0000')
                                            .setURL('https://www.youtube.com/watch?v=hRHonKKz4SU&list=PLNzAbQKI5RwGvxtk3ZvkXHyT11o01yKol&index=3')
                                            .setThumbnail('https://i.ytimg.com/vi/hRHonKKz4SU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDl2ymkh-Nn58sSzp9Zu9yaNz9CEA');
                                        message.channel.send(embed);
                                    }
                                    dispatcher.on('end', () => {
                                        message.member.voiceChannel.leave()
                                        console.log('left a voice channel')
                                    });
                                    dispatcher.on('error', e => {
                                        console.log(e);
                                    });
                                })
                                .catch(console.log)
                                
                            }   
                            else{
                                message.reply('Can You Join a Voice Channel?')
                            }}
                            break;
                            case 'end':{
                                message.member.voiceChannel.leave()
                            }
                            break;
        
                              
                        
                        }
                        
                        

        }
)
//This String Needs To Be at The End So it Gets Your Logon Token (Placed In the .ENV File After the 'Bot_Token=', You Can Get a Bot Token By Going to discordapp.com/developers/applications/)
client.login(process.env.Bot_Token)