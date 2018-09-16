const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const prefix = "$";
client.on('ready', () => {
client.user.setStatus('dnd');
console.log('966 Community Is Ready!');
});

client.on('guildMemberAdd', member => {
  member.addRole('name', "• New")
});

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "**الى اعضاء كلآن 966 :**" + "\n" +
        " " + `${args[1]}` + " "
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو**`);
    }
});

client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
    try {
    if(!men) {
      message.channel.send("**يرجى اختيار شخص لطردة.**");
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
    message.channel.send(`تم طرده بنجاح\n\n${men.username}.`)
} catch (e) {
  message.channel.send("عفوا، الشخص المراد لا يمكنني طرده بسبب صلاحيات او ماشابه.");
}
  }
});

client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> تم اعطائه ميوت ومدة الميوت : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#ffffff")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

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
  if(!message.channel.guild) return message.reply('** This command only for servers  **'); 
          message.delete() 
    message.channel.sendMessage(args.join(" ")).catch(console.error); 
  } 
if (command == "emb")    { 
  if(!message.channel.guild) return message.reply('** This command only for servers  **'); 
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  ")) 
    .setColor("#aa2f2f") 
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
let initialMessage = `
**لأخذ رتبة السيرفر المفضل لديك اضغط على الريأكشن**
@everyone - @here `;
const roles = ["Memberssa"];//رتب
const reactions = ["🔸"];//رياكشن
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`- Rank **${role}** .`); 
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
    if(!msg.guild.channels.find('name', 'submit')) return msg.reply('**Create Room : submit**');
      msg.delete().then
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('**$submit اسمك الحقيقي، اسمك باللعبة، عمرك**')
    if(msg.guild.channels.find('name', 'submit')) {
      msg.delete().then
      msg.channel.send(`**تم إرسال تقديمك بنجاح،\nيرجى انتظار الرد من الأدارة،\nكما يرجى مراجعة روم القبول والرفض،**\n\nشكرا لك.\n\n${msg.member}`).then(m => m.delete(9000));	    
      msg.guild.channels.find('name', 'submit').send(`
**Submit By** : ${msg.member}
**The Submit Is** : 

${args.join(" ").split(msg.mentions.members.first()).slice(' ')}

-
@here `)
      .then(function (message) {
        message.react('')
        message.react('')
      })
      }
    }

});

client.on('message', msg => {
	
  if(msg.content.startsWith('$sug')) {
    if(!msg.channel.guild) return msg.reply('** هذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'suggestions')) return msg.reply('**Create Room : suggestions**');
      msg.delete().then
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('**$sug You\'r Suggestion.**')
    if(msg.guild.channels.find('name', 'suggestions')) {
      msg.delete().then
      msg.channel.send(`${msg.member}\n\n**تم إرسال اقتراحك للأدارة، شكراََ لك.**`).then(m => m.delete(3500));	    
      msg.guild.channels.find('name', 'suggestions').send(`
-** Suggestion By :** ${msg.member}

-**The Suggestion is :** 

${args.join(" ").split(msg.mentions.members.first()).slice(' ')}

`)
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

    if (msg.content == '$966ClAN') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
});

client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('$ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor("#aa2f2f")
.addField('**Ping is**',msg + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "380307890235506698") return message.reply('You don\'t have permission.');
        message.channel.send('Restarting.').then(msg => {
            setTimeout(() => {
               msg.edit('Restarting..');
            },1000);
            setTimeout(() => {
               msg.edit('Restarting...');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
        },3000);
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
        .setColor("#aa2f2f")
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
        if (!message.member.hasPermissions(['MOVE_MEMBERS'])){
        message.delete()
    }
}
});

client.login(process.env.BOT_TOKEN);
