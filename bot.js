const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");
const wait = require('util').promisify(setTimeout);

client.on("ready", () => {
client.user.setStatus('dnd');
  console.log("Reeebel | Logged in! Server count: ${client.guilds.size}");
  client.user.setActivity("System.",{type: 'LISTENING'});
});

if (!prefix) {
    var prefix = "!";
}
client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    if (!msg.guild.member(client.user).hasPermission(8)) return
    var args = msg.content.slice(prefix.length).split(" ");
    var cmd = args[0];
    switch (cmd) {
      case "send":
        if (!args[1]) return msg.reply(`${prefix}send @user [message]`);
        if (!args[2]) return msg.reply(`${prefix}send @user [message]`);
        if (!msg.mentions.users.first()) return msg.reply(`${prefix}send @user [message]`);
        msg.mentions.users.first().send(args.join(" ").slice(args[0].length));
        break;
    }
})


client.on('guildMemberUpdate', (o,n) => {
    if (n.user.bot) {
        if (o.roles !== n.roles) {
            n.roles.forEach(role => {
                if (!n.roles.find('id', role.id)) n.removeRole(role);
            });
        };
    };
});


const invites = {};

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "vast");
    logChannel.send(`${member} Invited by <@${inviter.id}>`);
  });
});




const devs = ["518113766915702789"]// ايدي الخاص بحسابك
 
const adminprefix = "!";//Narox
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//لتغير البريفكس
  client.user.setPrefix(argresult).then
      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
 
  });



const voiceChannel = '535464643406069761'; 

const membersSize = (client) => {
 return client.channels.filter(c => c.type === "voice").map(c => c.members.size).reduce((a,b) => {return a + b}, 0);
}


client.on('ready', () => {
client.channels.get(voiceChannel).setName(`❆ , Voice Now ${membersSize(client)} .`)
}); 

client.on('voiceStateUpdate', () => {
client.channels.get(voiceChannel).setName(`❆ , Voice Now ${membersSize(client)} .`)
})




client.on("message", message => {
  if(message.content.startsWith("%verify")) { // الامر والبريفكس
    let num = Math.floor((Math.random() * 4783) + 10);
 
        message.channel.send(`**يرجى كتآبة الرقم التآلي :**\n**${num}**`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "Members")); // اسم الرتبة
      }).catch(() => {
        m.edit(`لقد أخذت وقتًا طويلاً لكتابة الرقم.  قم بإعادة كتابة الأمر مرة أخرى إذا كنت تريد التحقق من هويتك..`).then(m2 => m.delete(15000));
      });
    });
  }
});






client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
 
    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});




client.on("message", (message) => {
    if(message.content.startsWith(prefix+"c.gmail")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
});




client.on("message", msg => {
  if(msg.content === '!' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("WHITE")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});





client.on('message', message => {
            let args = message.content.split(' ').slice(1);
            if(message.content.split(' ')[0] == `${prefix}color`){
            const embedd = new Discord.RichEmbed()
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**لا يوجد لون بهذا الأسم ** ❌ `)
            .setColor(`ff0000`)
           
            if(!isNaN(args) && args.length > 0)
           
           
            if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
           
           
            var a = message.guild.roles.find("name",`${args}`)
             if(!a)return;
            const embed = new Discord.RichEmbed()
           
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**Done , تم تغير لونك . ✅ **`)
           
            .setColor(`${a.hexColor}`)
            message.channel.sendEmbed(embed);
            if (!args)return;
            setInterval(function(){})
               let count = 0;
               let ecount = 0;
            for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
           
            }
             message.member.addRole(message.guild.roles.find("name",`${args}`));
           
           
            }
            });





client.on("message", msg => {// الحقوق محفوظ لذا سيرفر ناروكس ديفAll CopyRight For Narox Dev
    if(msg.author.bot) return;
if(msg.channel.type === 'dm') return;

let p = "!";//البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);

if(cmd === `${p}report`){


    let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!rUser) return msg.channel.send("Couldn't find users.");
    let reason = args.join(" ").slice(22);


let reportembed = new Discord.RichEmbed()
.setDescription("معلومآت البلآغ ")
.setColor("WHITE")
.addField("- Report too", `${rUser}`)
.addField("- Report By", `${msg.author}`)
.addField("- Channel", msg.channel)
.addField("- Reason",`${reason}`)


let reportchannel = msg.guild.channels.find(`name`,"reports")
if(!reportchannel) return msg.channel.send("Couldn't find `reports` channel. ")

msg.delete().catch(O_o=>{});
reportchannel.send(reportembed);
    return;
}
});





client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`${member.user} **join this server.**`).catch(console.error);
});
 
client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`${member.user} **left this server.**`).catch(console.error);
});


client.on('message', async message => {
     let user = message.mentions.users.first() || message.author;
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content === '!!!S!!!') {
message.author.send(`الرسآلهه`).catch(RebeL =>{console.log('`Error`: ' + RebeL);
message.channel.send(`${user} خاصك مقفول`);
});
}}});




client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith("invite")) {

        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send(`** تم أرسال الرابط برسالة خاصة **`)

      message.author.send(`**مدة الرابط : يـوم
 عدد استخدامات الرابط : 5 **`)
    }
});



client.on("message", msg => {
  var prefix = '!'//البركفس
  if(msg.content.startsWith(prefix + 'account')){
    let embed = new Discord.RichEmbed()
    .setColor("WHITE")
    .addField("Year📆",msg.author.createdAt.getFullYear())
    .addField("Hour📆", msg.author.createdAt.getHours())
    .addField("Day📆", msg.author.createdAt.getDay())
    .addField("Month📆", msg.author.createdAt.getMonth())
    .addField("Minutes📆", msg.author.createdAt.getMinutes())
    .addField("Seconds📆", msg.author.createdAt.getSeconds())
    .addField("Full📆", msg.author.createdAt.toLocaleString())
    .setTimestamp()
    msg.channel.send(embed);
  }
});








////////


//// client.on("ready", () => { 
///    console.log('By : m7md'); client.user.setPresence({ 
//          status: 'online', 
//          game: { type: 0, name: 'Narox 🍷 , Road To 1K',
//          details: `https://discord.gg/29KpKJy`, 
//          url: 'http://twitch.tv/M7md_Salih', 
//          state: `Deving & Coding`, 
//         application_id: '532682436471947264', 
//   
//         assets: { 
//   small_image: `535061300569571329`, 
//   
//   small_text: 'Narox Devs', 
//   large_image: `535061300569571329`, large_text: `Road To 1K` } 
//   
//   } 
//   
//   }); 
//   });

////


client.on('voiceStateUpdate', (oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'system')
  if(!ch) return;//ReBeL & Codes
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.username
    if(rebel1 === false && rebel2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} Mute .`)
       .setFooter(`بوآسطهه : ${user}`)
        .setColor('#FFFFFF')
       ch.send(embed)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} UnMute . `)
       .setFooter(`بواسطه : ${user}`)
        .setColor('#FFFFFF')
       .setTimestamp()
       ch.send(embed)
    }
    if(codes1 === false && codes2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} Deafen .`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#FFFFFF')
       .setTimestamp()
       ch.send(embed)
    }
    if(codes1 === true && codes2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} UnDeafen .`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#FFFFFF')
       .setTimestamp()
       ch.send(embed)
    }
  })
});





client.on('message', message => {
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'rainbow')) {
      let role = message.guild.roles.find('name', '- RainBow ,')
    if(role) return message.channel.send(`**The Rank is Already Created.**`)
  if(!role){
    rainbow =  message.guild.createRole({
   name: "- RainBow ,",//اسم الرتبه
   color: "#000000",//الون الاساسي للرنبو
   permissions:[]//الرتبه المسموح بيها للرنبو  مثال MANAGE_ROLES ADMINISTRATOR  
 //نهايه الكود هنا
})
 
}
message.channel.send('🌈 **The Rank RainBow has been Created.**')//if the step completed
}})
 
client.on('ready', () => {//لا تغير شي هنا
  setInterval(function(){//Codes Server
      client.guilds.forEach(g => {//Codes Server
                  var role = g.roles.find('name', '- RainBow ,');//اسم رتبه رنبو
                  if (role) {//Codes Server
                      role.edit({color : "RANDOM"});//Codes Server
                  };
      });//Codes Server
  }, 1200);//سرعه تغير الالوان
})//Codes Server






client.on('message',message =>{
    var prefix = "!"
  var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.mentions.users.first()
    if(command == prefix + 'unban') {//SnOw Code
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':x: **You don\'t have permission.**'); //SnOw Code
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send('**hmmm..**');//SnOw Code
        if(!args[1]) return  message.channel.send('**Mention Any Member..**');
        if(args[1].length < 16) return message.reply(':x: **This is Id Not For Any User..**');//SnOw Code
        message.guild.fetchBans().then(bans => {//SnOw Code
            var Found = bans.find(m => m.id === args[1]);
            if(!Found) return message.channel.send(`:x: **This is User is Not Banned!,** <@${message.author.id}>`);//SnOw Code
            message.guild.unban(args[1]);
            message.channel.send(`:white_check_mark: **Successfully Unbanned <@${args[1]}> From the server!**`);
            }
 
        )}
      });







client.on('message', message => { 
    var prefix = "!";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "add") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**You don't have Permission.**").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**hmmm..**").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send('**Mention Any Members ..**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.channel.send("**Select Rank ..**").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.channel.send(':white_check_mark: **Done .**').then(msg => {msg.delete(10000)});
    }
    });





let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ AntiBots On Now !.**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        //antibots with ON , OFF ! RARE CODE
        //LIKE PLUSBOT !
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**:white_check_mark: AntiBots Off Now !.**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
client.on("guildMemberAdd", member => {
  if(!antibots[member.guild.id]) antibots[member.guild.id] = {
onoff: 'Off'
}
  if(antibots[member.guild.id].onoff === 'Off') return;
if(member.user.bot) return member.kick()
})
 
fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});
 
})







client.on("message", (message) => {
 
   if (message.content.startsWith("!new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **The ticket has been Created, [ #${c.name} ].**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`${message.author.username}!`, `**Please explain the problem in detail.**`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`**Are u Sure Close the ticket?\n\nType : !confirm**`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '!confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});











client.on('message', message => {
 
if (message.content === prefix + "muted") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t havepermissions**');
          message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
 
          }).then(() => {
              message.reply("✅ **Channel Muted now!**")
          });
}
 if (message.content === prefix + "unmuted") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have permissions**');
          message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
 
          }).then(() => {
              message.reply("✅ **Channel UnMuted now!**")
          });
}
 
 
});


client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('!server')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** Write Server IP . **");
        let embed = new Discord.RichEmbed()
        .setColor('WHITE')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 Server NIP",`${args}`,true)
        .addField("🌐 Server Port",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`Server MineCraft Stats`)
    message.channel.send(embed)      
}});



client.on("message", msg => { 
  if(msg.author.bot) return;
  if(msg.channel.type === 'dm') return;
let prefix = '!'; //البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);
if(cmd === `${prefix}warn2`){//الامر
if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.channel.send('**:x: You don\'t have Permission.**');
  

  let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!rUser) return msg.channel.send("**Mention Any Member ..**");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
    .setDescription("You have Warning 2")
    .setColor("WHITE")
    .addField("- Warn User", `${rUser}`)
    .addField("- Warn By", `${msg.author}`)
    .addField("- Reason",`${reason}`)
    
    
    let reportchannel = msg.guild.channels.find(`name`,"vast"); //حط هنا اسم الروم الي يوريك بعض المعلومات
    if(!reportchannel) return msg.channel.send("Couldn't find `vast` channel. "); //ط هنا اسم الروم الي يوريك بعض المعلومات
    
    msg.delete().catch(O_o=>{});
    reportchannel.send(reportembed);
    let role = msg.guild.roles.find(`name`, '・Warn 2'); //حط هنا اسم الرتبة
    if(!role) return msg.guild.channel.send("Could't find `vast` role."); //حط هنا اسم الرتبة
    rUser.addRole(role);
    
        return;
    }
    });



client.on('message', msg => {
    if(msg.content === '!team') {
        
        if(!msg.channel.guild) return msg.reply(":x: **This is Command for Servers Only.**");
       
if (msg.author.bot) return;
  const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setTitle("# Team Vást .")
            .setDescription(`

- \`ReeeBeL\`
- \`Mr447\`
- \`s7poge\`
- \`iLuvkill\`
- \`1zull\`
- \`CuzImHassanYT\`
- \`CuzImAlbros\`
- \`Coffin_\`
- \`HeRoYeeN\`
- \`ii9l3a_\`
- \`AbuSalem\`
- \`ImTry\`
- \`R2haf\`
- \`ii_Mosleh\`
- \`Im3ziz_Pro_\`
- \`K1nqLxrD\`
- \`OnlyRiZx\`
- \`iTzCommander_\`
- \`xFn_\`
- \`Hima_YT\`
- \`K1nqS3m\`
- \`1xPanz\`
- \`iiM_\`
- \`1Rakan\`
- \`..\`

**إذا اسمك مو موجود بالقائمة .. وانت بالكلآن**
كلم أي اداري موجود بالكلآن .. وقله اسمك عشآن يضيفك`)


        msg.author.sendEmbed(embed)

    }

});



client.on("message", msg => { 
  if(msg.author.bot) return;
  if(msg.channel.type === 'dm') return;
let prefix = '!'; //البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);
if(cmd === `${prefix}warn`){//الامر
if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.channel.send('**:x: You don\'t have Permission.**');
  

  let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!rUser) return msg.channel.send("**Mention Any Member ..**");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
    .setDescription("إنذار جديد بشأن مخالفة")
    .setColor("WHITE")
    .addField("- Warn User", `${rUser}`)
    .addField("- Warn By", `${msg.author}`)
    .addField("- Reason",`${reason}`)
    
    
    let reportchannel = msg.guild.channels.find(`name`,"vast"); //حط هنا اسم الروم الي يوريك بعض المعلومات
    if(!reportchannel) return msg.channel.send("Couldn't find `vast` channel. "); //ط هنا اسم الروم الي يوريك بعض المعلومات
    
    msg.delete().catch(O_o=>{});
    reportchannel.send(reportembed);
    let role = msg.guild.roles.find(`name`, '・Warn'); //حط هنا اسم الرتبة
    if(!role) return msg.guild.channel.send("Could't find `vast` role."); //حط هنا اسم الرتبة
    rUser.addRole(role);
    
        return;
    }
    });




client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var RaYaN= new Discord.RichEmbed()
        .setColor('WHITE')
        .setTimestamp()
        .setTitle('``New Message in private``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\`${message.content}\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("529445412252155924").send({embed:RaYaN});
    }
});




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**- Welcome to Vást**

:small_blue_diamond: يمنع السب والنشر
:small_orange_diamond: يمنع التطرق للأمور السيآسية والدينية .

** إذا وآجهتك مشكلة .. توجه الى الإدآرة .**

${member} :fallen_leaf: `) 
}).catch(console.error)
});




client.on('message', message => {
    var prefix = "!";
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });





client.on("message", message => {
    var prefix = "!";
    const command = message.content.split(" ")[0];

    if(command == prefix+"vkick"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("**Mention Any Member ..**")
            return;
        }

    if(!member.voiceChannel){
    message.reply("**i Can't ..**")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});



client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
            if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'idle').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('message', msg => {

    if (msg.content == '!join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
});







client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb") {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("FFFFFF")
    message.channel.sendEmbed(say);
    message.delete();
  }
  


});


client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '!';
    var name = '';
    var age = '';
    var fromwhere = '';
    var fa2dh = '';
    var filter = m => m.author.id === message.author.id;
    var subChannel = message.guild.channels.find(c => c.name === 'requests');
   
    if(command == prefix + 'vast') {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === 'Vaáast');
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send('**You Already have a Rank ..**');
        if(!subChannel) return message.channel.send('يجب أن يتوفر روم بأسم :: Requests');
       
        message.channel.send(':timer: | **أرسل، إسمك الحقيقي**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **قم بكتابة عمرك الأن**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **أكتب اسم دولتك**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك أكتب اسمك في ماين كرافت، مع مراعاة الأحرف**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setDescription('**\n هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('WHITE')
                                        .addField('الاسم', name, true)
                                        .addField('العمر', age, true)
                                        .addField('من وين', fromwhere, true)
                                        .addField('اسمك في الالعاب', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | **تم إرسال تقديمك بدخول الفريق، يرجى انتظار الرد من قبل الإدارة.**').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setColor('WHITE')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('أسمه :', name)
                                                .addField('العمر :', age)
                                                .addField('من وين :', fromwhere)
                                                .addField('اسمه بالالعاب :', fa2dh)
                                                .addField('الحساب', message.author)
                                                .addField('ايدي الحساب', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === '518113766915702789'
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === '518113766915702789'
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: **You Accepting for clan.**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'requests').send(`:white_check_mark: **Member has been accepted to join the team**\n\n<@${message.author.id}>`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: **You Denied for clan.**`);
                                                        message.guild.channels.find(r => r.name === 'requests').send(`:x: **The member has been denied access to the team**\n\n<@${message.author.id}>`);
                                                    }).catch();
                                                })
                                            });// Alpha Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: **تم إلغاء تقديمك .**');// Alpha Codes
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});


  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.send("**Mention any Members.**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Can't ..**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});



client.on('message', msg => {
    var prefix = "!";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("ضع رقم للمسح ..").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("**تم مسح " + textxt + ".**").then(m => m.delete(3000));
        }    
    }
}
});



client.on('message', message => {
const prefix = "!";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.channel.send("**Mention Any Members.**");
  if(!reason) return message.channel.send("**Supply a Reason.**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Can't ..**");

  message.guild.member(user).kick(7, user);

 message.channel.send(`**:white_check_mark: ${user.tag} kicked from the server ! :airplane: **  `)

}
});

client.on('message', message => {
    if (message.content.startsWith("!aavatarr")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("FFFFFF")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






client.on('message', async message =>{
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I don't have permission** #1").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
     if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':x: **You don\'t have permission.**');
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send("**Mention Player..**") .then(m => m.delete(5000));
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.channel.send(":x: **Supply Time.**");
 
    await(tomute.addRole(muterole.id));
message.channel.send(`<@${tomute.id}> **Muted ${ms(ms(mutetime))}** :zipper_mouth:`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **UnMuted Timeout!** :white_check_mark:`);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**You don't have permission.").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I don't have permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: **Mention**");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("** Already UnMuted!**")
 
  await toMute.removeRole(role)
  message.channel.sendMessage(":white_check_mark: **Player has been UnMuted!**");
 
  return;
 
  }
 
});



client.on('message', msg => {
    if(!msg.guild) return;
    if(msg.channel.id === '529441755892809728') {
    msg.delete().then
        var channel = msg.guild.channels.get("529441960331837441")
        channel.send(msg.member + `\n\n` +msg.content)
    }
});

client.on('guildMemberAdd', member => {
     var guild;
    while (!guild)
        guild = client.guilds.get("488259622730203137") 
let channel = member.guild.channels.find('name', 'vast');
  if (!channel) return; 
client.channels.get("529435960778424331").send(`**- Welcome to Vast .** :rose:

${member}`) 
});


client.on('message',async message => {
  if(message.content === '!unbans') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':x: **You don\'t have permission.**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**Hmmm..**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("FFFFFF")
        .setDescription(`**:white_check_mark: Done.**`)
  message.channel.sendEmbed(embed);
  guild.owner.send(`:white_check_mark: **has Been Unban By <@${message.author.id}> **`) 
  });
  });
  }
  });


  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "best") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', '- The Vastest.');
  if (!muteRole) return message.reply("**I Can't Find rank ..**").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply('**Mention Any Member ..**').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).addRole(muteRole.id)) {
      return message.channel.send(":white_check_mark: **User has given The Vastest Rank **").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.channel.send(":white_check_mark: **User has given The Vastest Rank **").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});


  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "joined") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', '.Mods');
  if (!muteRole) return message.reply("**I Can't Find rank ..**").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply('**Mention Any Member ..**').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).addRole(muteRole.id)) {
      return message.channel.send(":white_check_mark: **User has Joined for Officials.**").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.channel.send(":white_check_mark: **User has Joined for Officials.**").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});
 


client.login(process.env.BOT_TOKEN);
