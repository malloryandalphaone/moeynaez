const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const moment = require('moment');
const Canvas = require('canvas')
const jimp = require('jimp')
const sql = require('sqlite')
const ytdl = require("ytdl-core");

const prefix = "!";
client.on("ready", () => {
client.user.setStatus('idle');
  console.log("Reeebel | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`Strict.. !help`);
});

client.on("message",async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Help Clan Strict..`)
    .setColor(`#FFFFFF`)
    .setDescription(`هذا البوت للمساعدة فقط `)
    .addField(`!تذكرة`, `عند مواجهتك لمشكلة بالفريق قم بكتابة هذا الأمر`)
    .addField(`رابط`, `لأخذ رابط لجلب بعض الأعضاء`)
    .addField(`!nick`, `لتغيير أسمك بالسيرفر`)
    message.channel.send({ embed: embed });
  }

	
  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}


    if (message.content.toLowerCase().startsWith(prefix + `تذكرة`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "‹ Clan Support ›")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    await num++;
    await message.guild.createChannel(`ticket-${num}`, "text").then(c => {
        let role = message.guild.roles.find("name", "‹ Clan Support ›");
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
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `**أخوي الغالي، يرجى شرح سبب فتح التذكرة او المشكلة الي انت فيها واخوانا المساعدين ماراح يقصرون معك.**`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `قفل`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '!تم', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
          num-=1;
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "chát");
    logChannel.send(`${member} **Invited by**: <@${inviter.id}>`);
  });
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

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`..`) 
}).catch(console.error)
})


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
      }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))


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
  
 

if (command == "embed") {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor("FFFFFF")
    message.channel.sendEmbed(say);
    message.delete();
  }
  


});


client.on('message', msg => {
    if(!msg.guild) return;
    if(msg.channel.id === '520264177126735882') {
    msg.delete().then
        var channel = msg.guild.channels.get("520274183796817950")
        channel.send(msg.member + `\n\n` +msg.content)
    }
});


 client.on("message",  message => {
         let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'nick')) {
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
            message.channel.send("حط الاسم")
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
 
        var modRole = message.guild.roles.find(r => r.name === '‹ Register ›');
       
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
                                        .addField('اسمه في ماين كرافت', fa2dh, true)
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
                                                .addField('الاسم', name)
                                                .addField('العمر', age)
                                                .addField('من وين', fromwhere)
                                                .addField('اسمه في ماين كرافت', fa2dh)
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



client.login(process.env.BOT_TOKEN);
