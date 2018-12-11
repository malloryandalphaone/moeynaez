const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");

client.on("ready", () => {
client.user.setStatus('dnd');
  console.log("Reeebel | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`Strict System`);
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '520251788016877568').setName("#. ");
client.channels.find('id', '520251788016877568').setName("#. W");
client.channels.find('id', '520251788016877568').setName("#. We");
client.channels.find('id', '520251788016877568').setName("#. Wel");
client.channels.find('id', '520251788016877568').setName("#. Welc");
client.channels.find('id', '520251788016877568').setName("#. Welco");
client.channels.find('id', '520251788016877568').setName("#. Welcom");
client.channels.find('id', '520251788016877568').setName("#. Welcome");
client.channels.find('id', '520251788016877568').setName("#. Welcome T");
client.channels.find('id', '520251788016877568').setName("#. Welcome To");
client.channels.find('id', '520251788016877568').setName("#. Welcome To S");
client.channels.find('id', '520251788016877568').setName("#. Welcome To St");
client.channels.find('id', '520251788016877568').setName("#. Welcome To Str");
client.channels.find('id', '520251788016877568').setName("#. Welcome To Stri");
client.channels.find('id', '520251788016877568').setName("#. Welcome To Stric");
client.channels.find('id', '520251788016877568').setName("#. Welcome To Strict");
client.channels.find('id', '520251788016877568').setName("#. Welcome To Strict.");
  }, 3000);
});



client.on("message", async message => {
    if(message.content.startsWith(prefix + "banlist")) {
        if(!message.guild) return;
                if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Sorry But You Dont Have Permission** `BAN_MEMBERS`' );
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**\`${b}\` | ${bb}**`);
        });
    }
});



client.on("message", async message => {
    if(message.content.startsWith(prefix + "teams")) {
        if(!message.guild) return;
                if(!message.member.hasPermission('CONNECT')) return message.channel.send('**Sorry But You Dont Have Permission** `CONNECT`' );
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**Teams Clan Strict** :\n\n**.**\` Reeebel\`\n**.**\` Mr447\`\n**.**\` IceCrash_\`\n**.**\` ImAbuSalem\`\n**.**\` iLuvkill\`\n**.**\` vD7oomy\`\n**.**\` ii9l3a_\`\n**.**\` s7pg\`\n**.**\` HeRoYeeN\`\n**.**\` xM3ark_\`\n**.**\` NightS3m\`\n**.**\` CuzImHassanYT\`\n**.**\` 8wl\`\n**.**\` K1nqLxrD\`\n**.**\` Quixxyy\`\n**.**\` ImTry\`\n**.**\` xFn_\`\n**.**\` x3be6\`\n**.**\` i_zull\`\n**.**\` Hima_YT\`\n**.**\`enseleit\``);
        });
    }
});


client.on("message", async message => {
    if(message.content.startsWith(prefix + "blocked")) {
        if(!message.guild) return;
                if(!message.member.hasPermission('CONNECT')) return message.channel.send('**Sorry But You Dont Have Permission** `CONNECT`' );
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**Blocked List** :\n\n**- **\` IxNight\`\n**- **\` Fqkess\`\n**- **\` HeyImMaliK_\`\n**- **\` Fqkee\`\n**- **\` ClownssDeath\`\n**- **\` S4ICE\`\n**- **\` AmirGamer_78\`\n**- **\` swfleh\`\n**- **\` _Ii3zo\`\n**- **\` 1E_\`\n**- **\` 1YaqSIn\`\n\n- ${message.member}`);
        });
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
    client.channels.get("490165996854706217").send({embed:RaYaN});
    }
});




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`${member}

- Welcome to Stict Clan.
- مرحباََ بك في فريق ستريكت.

أمر التقديم :

\`!Strict .\``) 
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
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});





client.on('message', message => {

if (message.content === prefix + "mutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted ✅ ")
           });
}
  if (message.content === prefix + "unmutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnMuted ✅ ")
           });
}
  

});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', msg => {
  if(msg.author.bot) return;
  
  if(msg.content === 'رابط') {
    client.guilds.forEach(g => {
      
      let l = g.id
      g.channels.get(g.channels.first().id).createInvite({
        maxUses: 5,
        maxAge: 86400
      }).then(i => msg.channel.send(`https://discord.gg/${i.code}`))


    })
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



 client.on("message",  message => {
         let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'nick')) {
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
            message.channel.send("يجب أن تضع اسم ..")
        } else {
            if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' :x:البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
            let changenick = message.mentions.users.first();
            let username = args.slice(1).join(' ')
            if (username.length < 1) return message.reply('حط الاسم').catch(console.error);
            if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. :x:').catch(console.error);
            message.guild.member(changenick.id).setNickname(username);
            message.channel.send("تم تغيير الاسم الى: " + changenick + "")
        }
    }});


client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '!';
    var name = '';
    var age = '';
    var fromwhere = '';
    var fa2dh = '';
    var filter = m => m.author.id === message.author.id;
    var subChannel = message.guild.channels.find(c => c.name === 'التقديمات');
   
    if(command == prefix + 'strict') {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === '- Trying..');
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send('بالفعل لديك الرتبة');
        if(!subChannel) return message.channel.send('يجب أن يتوفر روم بأسم :: التقديمات`');
       
        message.channel.send(':timer: | **أرسل، إسمك الحقيقي**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **قم بكتابة عمرك الأن**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **أكتب اسم دولتك، ومن اين**').then(msgS => {
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
                                        .addField('اسمك في ماين كرافت', fa2dh, true)
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
                                                message.channel.send(':white_check_mark: | **تم إرسال تقديمك بدخول الفريق، يرجى انتظار الرد من قبل الإدارة.').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setColor('WHITE')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('أسمه :', name)
                                                .addField('العمر :', age)
                                                .addField('من وين :', fromwhere)
                                                .addField('اسمه مآين كرافت :', fa2dh)
                                                .addField('حسابه', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === '416848644482793472'
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === '416848644482793472'
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبولك بالفريق، وسيتم إختبار مهاراتك \n**${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'النتائج').send(`:white_check_mark: | **تم قبول العضو بالفريق، يرجى إخباره بمراجعة الرسائل الخاصة به**\n\n<@${message.author.id}>`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === 'النتائج').send(`:x: | **تم رفض العضو باسباب أدت الى عدم قبوله**\n\n<@${message.author.id}>`);
                                                    }).catch();
                                                })
                                            });// Alpha Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');// Alpha Codes
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


client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "- Want to join Stict Clan,");
   member.addRole (role);
  
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
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


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
        msg.channel.send("تم مسح " + textxt + ".").then(m => m.delete(3000));
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

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

 message.channel.send(`**:white_check_mark: ${user.tag} kicked from the server ! :airplane: **  `)

}
});



client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
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








const adminprefix = "!";
const devs = ['ايدي2','518113766915702789'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'play')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'name')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});


client.on('message', async message =>{
  var prefix = "!";
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have Permission ..**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**Mention any member ..**") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**Sorry, I Don\'t Have Permission ..**');
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
    if(!mutetime) return message.reply("**Please use Time ..**");
 
    await(tomute.addRole(muterole.id));
message.channel.send(`<@${tomute.id}> **Muted ${ms(ms(mutetime))}! :zipper_mouth: **`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **UnMuted Timeout!** :white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**You don't have Permission ..**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I don't have Permission .. **").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**Mention Any Member ..**");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**You Already UnMuted!**")
 
  await toMute.removeRole(role)
  message.channel.sendMessage(":white_check_mark: **Player Has UnMuted!**");
 
  return;
 
  }
 
});



client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!اعضاء')
      var IzRo = new Discord.RichEmbed()
      .setTitle(' عدد اعضاء الكلان  ')
      .addBlankField(true)
      .addField('.',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });


client.on('message', msg => {
    if(!msg.guild) return;
    if(msg.channel.id === '520264177126735882') {
    msg.delete().then
        var channel = msg.guild.channels.get("520780758818750474")
        channel.send(msg.member + `\n\n` +msg.content)
    }
});



client.login(process.env.BOT_TOKEN);
