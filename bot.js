const Discord = require('discord.js');
const moment = require('moment');
const fs = require('fs');
const ms = require("ms");
const client = new Discord.Client();
const prefix = "$";
client.on('ready', () => {
client.channels.get("514076662464249861").join();
client.user.setStatus('dnd');
client.user.setGame("System.", "https://twitch.tv/idk");
console.log('Strict Clan Is Ready.');
});

let hybhs;
client.on("ready", async  => {
    let guild = client.guilds.get("488259622730203137");
  let users = guild.members.map(member => member.user.id);
  let i;
  hybhs=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  hybhs++;
}
}
guild.channels.find('id', '515551933856219156').setName("Voice Now : "+hybhs+".");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("488259622730203137");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   hybhs++;
guild.channels.find('id', '515551933856219156').setName("Voice Now : "+hybhs+".");
} else if(newUserChannel === undefined){
  hybhs--;
guild.channels.find('id', '515551933856219156').setName("Voice Now : "+hybhs+".");
}
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
    message.channel.send(`Done.`)
} catch (e) {
  message.channel.send("Erorr.");
}
  }
});

const hybh = ['380307890235506698', '449506099268419595']; 
client.on('message', message => { 
  if (message.author.bot) return; 
  if (!message.content.startsWith(prefix)) return; 
    var argresult = message.content.split(` `).slice(1).join(' '); 
      if (!hybh.includes(message.author.id)) return; 
  let command = message.content.split(" ")[0]; 
  command = command.slice(prefix.length); 
  let args = message.content.split(" ").slice(1);  
  if (command === "say")  { 
  if(!message.channel.guild) return message.reply('** This command only for servers  **'); 
          message.delete() 
    message.channel.sendMessage(args.join(" ")).catch(console.error); 
  } 
if (command == "emb")  { 
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
  let acRoom = client.channels.get('513785861511577600');
  let em = client.emojis.find(e => e.name === "false");
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '488259622730203137') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن آسم المراد رفضه.");

  acRoom.send(`» Name **::** ${mention}\n» ${em} تم رفض تقديم العضو .`)
  }
});
 
client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('513785861511577600');
  let em = client.emojis.find(e => e.name === "true");
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '488259622730203137') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن آسم المراد قبوله');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`» Name **::** ${mention}\n» ${em} تم قبول تقديم العضو`);
    });
  }
});

client.on('message', message => {
	
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
if(message.author.id !== '449506099268419595') return;
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

    if(command === "$clear") {
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
     if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الى الروم الصوتي.**`).then(m => m.delete(2000));


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


client.on('message', async message => {

  if(message.content.startsWith("$strict")) {

    await message.channel.send("**الرجاء كتابة اسمك الحقيقي**").then(e => {

    let filter = m => m.author.id === message.author.id

    let lan = '';

    let md = '';

    let br = '';

    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })

    .then(collected => {

      lan = collected.first().content

      collected.first().delete()

e.delete();

     message.channel.send('**حسناََ، قم بكتابة عمرك**').then(m => {

let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })

.then(co => {

  md = co.first().content

        co.first().delete()

        m.delete();

message.channel.send('**أكمل، قم بكتابة أسمك باللعبه مع مراعاة الأحرف**').then(ms => {

let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })

.then(col => {

  br = col.first().content

        col.first().delete()



ms.delete()



 message.channel.send('سيتم إرسال تقديمك،برجاء الأنتظار ...').then(b => {

        setTimeout(() => {

  b.edit(`تم إرسال تقديمك بنجاح، يرجى إنتظار نتيجة القبول أو الرفض\n<@${message.author.id}>`).then(m => m.delete(10000));

        },3000);

var gg = message.guild.channels.find('name', 'requests')

if(!gg) return;

if(gg) {

gg.send({embed : new Discord.RichEmbed()

.setDescription(`**The name** : \n ${lan}\n\n**The Old** : \n ${md} \n\n**The Name of game** : \n ${br} \n\n\n**بواسطة** :\n <@${message.author.id}>`)  


.setTimestamp()

});

}        

})

})

})

})

})

})

})

 }

})

client.on('guildMemberAdd', member => {

 const channel = member.guild.channels.find('name', 'chat');

 if (!channel) return;

 channel.send(`**Welcome To Strict**, ${member}`);

 

});

 client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'sserver')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}**`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} \n\n**${inviteCount} invites.**`);
});
  }
});

    const adminprefix = "$";
const devs = ['380307890235506698','449506099268419595','319172728114642945'];
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

client.on('message', message => {
    if(!message.channel.guild) return;
    if (message.author.bot) return;

    if(!message.member.hasPermission('ADMINISTRATOR')) return;
  
  if (message.content.startsWith('$send')) {

    var mentionned = message.mentions.users.first();
    let args = message.content.split(" ").slice(1);

    var elite;
    if(mentionned){
        var elite = mentionned;
      
    } else {
      return message.channel.send("لم يتم إرسآل الرسآلة ، بسبب خطاء ما .");
        
    }


  let say = new Discord.RichEmbed()
  .setDescription(args.join("  "))
  .setColor("FFFFFF")
  client.users.get(mentionned.id).sendEmbed(say);
  
  }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'ticket')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","⁎ Official Tickets.");
        let ticketsStation = message.guild.channels.find("name", "‹ Tickets ›");
        if(!args) {
            return message.channel.send('**Type:** $new وسبب فتح التذكرة.');
        };
                if(!support) {
                    return message.channel.send('**Please make sure that `⁎ Official Tickets.` role exists and it\'s not duplicated.**');
                };
            if(!ticketsStation) {
                message.guild.createChannel("« Tickets »", "category");
            };
                message.guild.createChannel(`ticket_${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`You'r Ticket is ready **::** ${ticket}.`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('New a Ticket')
                                .setColor("FFFFFF")
                                .addField('Reason :', args)
                                .addField('Open ticket :', message.author)
 
                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("EMBED_LINKS")) return;
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("هل آنت متأكد من الغاء آلتذكرة، لديك 60 ثآنية\nأكتب الكلمة مرة آخرى لالغآء التذكرة .")
                    .setColor("FFFFFF");
                    message.channel.sendEmbed(embed) .then(codes => {
 
                   
                        const filter = msg => msg.content.startsWith(prefix + 'close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**تم الغاء التذكرة بنجآح .**')) .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
                        })
 
 
                    })
 
 
           
    }
});

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
    if (args[0] == "help") {
        message.reply("Usage: !tempmute <user> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Veuillez mentionner un utilisateur !");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas le mute !");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Merci d'indiquer une raison !");

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("Merci de précisez un temps");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`Salut ! t'as été muter pour ${mutetime}. Désolé !`)
    } catch (e) {
        message.channel.send(`Un utilisateur a été mute, mais ses MP soont bloqués, il a été mute pour ${mutetime}`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(`Mute fait par ${message.author}`)
        .setColor("RANDOM")
        .addField("Utilisateur muted :", tomute)
        .addField("Muted dans le salon", message.channel)
        .addField("Muted à", message.createdAt)
        .addField("Temps du mute", mutetime)
        .addField("Raison", reason);

    let incidentschannel = message.guild.channels.find(`name`, "logs");
    if (!incidentschannel) return message.reply("Créer un salon logs !");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> est mute pour ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> a été unmuted !`);
    }, ms(mutetime));
}

client.on('guildMemberAdd', member => {
    const guild = member.guild;
    guild.members.get(member.id).addRole(guild.roles.find('name', '» A New Member.'));
});

client.login(process.env.BOT_TOKEN);
