const {Client, Intents, DiscordAPIError} = require("discord.js")
const client = new Client({
    intents: new Intents(32767) ,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
})
const config = require('./config.json')
const command =require('./commands')
const prefix =(require('./config.json'))
const Discord = require('discord.js')



client.on('message', message=>{

    // if(message.author.id==='601737119760646145'){
    if(message.content==='cat'){
        message.reply('catter*')
    }}
)


client.on('ready', () => {
    console.log('Bot online');
    const activity=[
        `${client.guilds.cache.get('764429795739566110').memberCount} members🔥`,
        `over The Gamers🐈`

    ];
    let index =0;
    setInterval(()=>{
if(index=== activity.length)index=0;
const status=activity[index];
client.user.setActivity(status, {type: 'WATCHING'})
index++;
},5000 
)
}
)
client.on('message', message=>{

    if(message.author.id==='601737119760646145'){
    if(message.content==='cat'){
        message.reply('catter*')
    }}
})
client.on('message', message=>{

    if(message.author.id==='433693053648371722'){
    if(message.content==='meow'){
        message.reply('סאסי לא סוסי')
    }}
})
client.on('message', message => {

    // channel1=client.channels.cache.find(channel=>channel.name==='【🎓】event-times')
    if(message.channel.id==='890941960473423883'){
        message.react('🤏')
    }
    }
    )
    
    const talkedRecently = new Set();


 
    command (client, 'h', message=>{
      
        
        const channel = client.channels.cache.find(channel => channel.name === 'tests')
    
        let help=new Discord.MessageEmbed()
        .setColor('DARK_BLUE')
        .addFields([{
                    
            name:'__**User:**__',
            value:`** ${message.member} צריך את העזרה שלכם!**`
        
        }]
        )
        if(message.content==='!h'){
        help.addFields([{
            name:'__**Reason:**__',
            value:"`The user didn't write a reason!`"
        }
    ]
        )
    }else{
        help.addFields([{
            name:'__**Reason:**__',
            value:('`'+(message.content.replace('!h ','\u200b'))+'`')
        }])
    }
       help.addFields([{
        name:'__**Roles staff:**__'
        ,value: `${"**<@&" + '776580885927297035' +">**"}`
    },{
    name:"__**Channel:**__",
    value: "<#"+(message.channel.id)+">"
    },
    ]
       )
        
       help.setTimestamp()
       .setThumbnail(message.author.displayAvatarURL({dynmaic:true}))
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dynmaic:true}))
    if(message.member.voice.channel){
        help.addFields([{
            name: "__**Voice:**__",
             value: "<#"+(message.member.voice.channel.id)+">"
        
         
        }
    ]
        )
        }else {
            help.addFields([{
                name: "__**Voice:**__",
                 value: "The user is not in a voice!"
          }
              
       
    ]
        )
    }
    // if(message.content==='!h'){
    //     help.addFields([{
    //         name:'__**Reason:**__',
    //         value:"The user didn't write a reason!"
    //     }
    // ]
    //     )
    // }else{
    //     help.addFields([{
    //         name:'__**Reason:**__',
    //         value:(message.content.replace('!h','\u200b'))
    //     }])
    // }
      help.addFields([{
    name: '__**מטפל:**__',
    value: 'לחץ על הריאקשן בשביל לטפל'
      }])
    
      
    
      if (talkedRecently.has(message.author.id)) {
        message.channel.send(" חכה בבקשה דקה לפני שאתה עושה שוב הלפ " + '<@'+ message.author+ '>');
    } else 
    {
        message.reply('צוות יבוא לעזור לך בהקדם האפשרי!')
      channel.send({content: `<@&776580885927297035>`, embeds: [help] }).then(help=>{
            help.react('✅')
    
            // let hey= new Discord.MessageEmbed()
            // .setTitle('halo')
            // help.edit({embeds: [hey]})
            const filter =(reaction, user)=> !user.bot;
        collector = help.createReactionCollector({ filter});
        collector.on('collect', async (reaction,user) => {
            // console.log(user);
            const embed =help.embeds[0]
           embed.fields[5]={name:'__**מטפל:**__', value:('<@'+(user.id)+'>') }
           await help.edit({embeds: [embed]}).then( async help=>{
               help.reactions.resolve('✅').remove(user.id)
               help.reply('<@'+(user.id)+'> מטפל!') 
               await help.edit('\u200b')
            })
           })
        
        })
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
        });



client.login(config.token)