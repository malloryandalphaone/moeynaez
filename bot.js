const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const prefix = "$";
client.on('ready', () => {
client.channels.get("493787859992576000").join();
client.user.setStatus('idle');
client.user.setActivity("#Welcome",{type: 'LISTENING'})
console.log('966 Community Is Ready!');
});

client.on("ready", () => {
    setInterval(function(){
        client.guilds.get("488259622730203137").roles.find("name", "RB.").edit({
            color : "RANDOM"
        });
    }, 10000)
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var hybh = new Discord.RichEmbed()
            .setColor('#FFFFFF')
            .setTimestamp()
            .setTitle('**رساله جديده في خاص البوت**')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`${message.content}\`\``)
            .setFooter(`من (@${message.author.tag})`)
        client.channels.get("490165996854706217").send({ embed: hybh });
    }
});

client.on('guildCreate', (guild) => {
    if(client.guilds.size > 2) {
        guild.leave();
    }
});

client.on('message', function(message) {
    if (message.content == "!!clear") {
        if (message.member.hasPermission("ADMINSTRATOR")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});

client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
  if(!message.member.hasPermission('MOVE_MEMBERS')) return;
    try {
    if(!men) {
      message.channel.send("**يرجى اختيار شخص لطرده من الروم.**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("الشخص المراد لا يوجد بالرومات الصوتيه.");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("لا يوجد لديك صلاحيات للطرد.")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("لا يوجد لدي صلاحية سحب اعضاء.");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("لا يوجد لدي صلاحية انشاء رومات.")

    message.guild.createChannel("Voice Kick.", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`تم طرده بنجاح\n\n${message.user.username}.`)
} catch (e) {
  message.channel.send("عفوا، الشخص المراد لا يمكنني طرده بسبب صلاحيات او ماشابه.");
}
  }
});

const jackeo = ['380307890235506698', 'ID Owner 2']; 
client.on('message', message => { 
  if (message.author.bot) return; 
  if (!message.content.startsWith(prefix)) return; 
    var argresult = message.content.split(` `).slice(1).join(' '); 
      if (!jackeo.includes(message.author.id)) return; 
  let command = message.content.split(" ")[0]; 
  command = command.slice(prefix.length); 
  let args = message.content.split(" ").slice(1);  
  if (command === "say")  { 
  if(!message.member.hasPermission('ADMINSTRATOR')) return;
  if(!message.channel.guild) return message.reply('** This command only for servers  **'); 
          message.delete() 
    message.channel.sendMessage(args.join(" ")).catch(console.error); 
  } 
if (command == "emb")  { 
if(!message.member.hasPermission('ADMINSTRATOR')) return;
  if(!message.channel.guild) return message.reply('** This command only for servers  **'); 
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  ")) 
    .setColor("#FFFFFF") 
    message.channel.sendEmbed(say); 
    message.delete(); 
  }  
});

 client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('489083208319631360');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '488259622730203137') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن آسم المراد رفضه.");

  acRoom.send(`:x: | ${mention}\n\n**تم رفضك من قبل الإدارة.**`)
  }
});
 
 
 
client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('489083208319631360');
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '488259622730203137') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن آسم المراد قبوله');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`:white_check_mark: | ${mention}\n\n**تم قبولك من قبل الإدارة**`);
    });
  }
});

    const adminprefix = "$";
const devs = ['380307890235506698','ID OWNER OF BOT'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`);
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
}); 

const yourID = "380307890235506698";
const setupCMD = "$servers"
let initialMessage = `@everyone **.** Servers
**لآختيار رتبة سيرفرك اضغط على الريأكشن الموجود تحت الرتبة**.`;
const roles = ["Hypixel", "HiveMC", "BlocksMC", "MarsMC", "GiantCraft", "CubeCraft"];//رتب
const reactions = ["😊", "😊", "😊", "😊", "😊", "😊"];//رياكشن

if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";


function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`**-Server** ' __${role}__ ' .`); 
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});


client.on('message', msg => {
	
  if(msg.content.startsWith('$submit')) {
    if(!msg.channel.guild) return msg.reply('** هذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'التقديمات')) return msg.reply('**Create Room : التقديمات**');
      msg.delete().then
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('**$submit اسمك الحقيقي، اسمك المستعار، عمرك**')
    if(msg.guild.channels.find('name', 'التقديمات')) {
      msg.delete().then
      msg.channel.send(`**تم إرسال تقديمك بنجاح،\nيرجى انتظار الرد من الأدارة،\nكما يرجى مراجعة روم القبول والرفض،**\n\nشكرا لك.\n\n${msg.member}`).then(m => m.delete(9000));	    
      msg.guild.channels.find('name', 'التقديمات').send(`
════════════════════════════════

**بواسطة** : ${msg.member}

**التقديم** : 

${args.join(" ").split(msg.mentions.members.first()).slice(' ')}

════════════════════════════════
@here `)
      .then(function (message) {
        message.react('')
        message.react('')
      })
      }
    }

});

client.on('message', message => {
	
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
if(message.author.id !== '380307890235506698') return;
      message.guild.members.forEach(m => {
   m.send(args.replace(/\[user]/g,m));
       if(message.attachments.first()){
m.sendFile(message.attachments.first().url);
       }
   });
message.delete();    
  }
  } else {
      return;
  }
});

client.on('message', msg => {
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
    msg.channel.send("ضع عدد الرسائل التي تريد مسحها").then(m => m.delete(1500));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("عدد الرسائل التي تم مسحها `" + textxt + "`").then(m => m.delete(3500));
        }    
    }
}
});

  client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الى الروم الصوتي.**`)


     }
       });

client.on('message', msg => {

    if (msg.content == '$join') {
    if(msg.author.id !== '380307890235506698') return;
    msg.channel.send(`**تم، لقد دخلت الروم.**`).then(m => m.delete(2000));
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
});

client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.includes('discord.gg')){
        if(!message.channel.guild) return message.reply('**الأنفايتات بهذا السيرفر ممنوع.**').then(m => m.delete(3000));
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    }
}
});

client.on('message', message => {
    if(message.content.includes('youtube')){
        if(!message.channel.guild) return message.reply('**ممنوع نشر روابط اليوتيوب**').then(m => m.delete(3000));
        if (!message.member.hasPermissions(['EMBED_LINKS'])){
        message.delete()
    }
}
});

client.on('message', msg => {
    if(!msg.guild) return;
    if(msg.channel.id === '490154527195136000') {
	msg.delete().then
        var channel = msg.guild.channels.get("492416381313351682")
        channel.send(msg.member + `\n\n` +msg.content)
    }
});

client.on('guildMemberAdd', member => {
    let name = client.users.get(member.id).username;
    member.setNickname(`#966 | ${name}`)
});



client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "$966") {
      message.author.sendMessage(`
❖════════════════════❖

\`966 Community\` : https://discord.gg/5MNGynn

❖════════════════════❖

آلتقديم و طريقة :

\`1\` **أذهب الى روم الأوامر
\`2\` **أكتب أمر التقديم **--> \`#submit\`
\`3\` **#submit \`<أسمك - أسمك المستخدم بالالعاب - عمرك>\`

❖════════════════════❖

**Check Room #القبول-الرفض
رآجع غرفة #القبول-الرفض**
`);

}
});
/////SSS Test

client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '!!';// Alpha Codes
    var name = '';// Alpha Codes
    var age = '';// Alpha Codes
    var fromwhere = '';// Alpha Codes
    var fa2dh = '';// Alpha Codes
    var filter = m => m.author.id === message.author.id;// Alpha Codes
    var subChannel = message.guild.channels.find(c => c.name === 'support-join');// Alpha Codes
   
    if(command == prefix + 'join-support') {// Alpha Codes
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === '✲ SUPPORT');// Alpha Codes
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');// Alpha Codes
        if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `support-join`');// Alpha Codes
       
        message.channel.send(':timer: | **اكتب اسمك الحقيقي الان من فضلك**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **من فضلك اكتب عمرك الان**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **من فضلك اكتب من اي بلد انت**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك اكتب سبب تقديمك على الرتبة والمهارات اللتي لديك لتقديمها**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('GREEN')
                                        .addField('الاسم', name, true)
                                        .addField('العمر', age, true)
                                        .addField('من وين', fromwhere, true)
                                        .addField('المهارات وسبب التقديم على الرتبة', fa2dh, true)
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
                                                message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم support-accept').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('الاسم', name)
                                                .addField('العمر', age)
                                                .addField('من وين', fromwhere)
                                                .addField('لماذا يريد التقديم', fa2dh)
                                                .addField('حسابه', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === 'ايدي الي يقبل الطلب'
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === 'ايدي الي يقبل الطلب'
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبولك اداري بسيرفر **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'support-accept').send(`:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === 'support-accept').send(`:x: | تم رفضك [ <@${message.author.id}> ]`);
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

client.login(process.env.BOT_TOKEN);
