const Discord = require('discord.js');
const client = new Discord.Client();
/////////////////////////////////////////////حقوق الفا كودز
///////////////////////// ALPHA BEST
client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
Login successful.

-----------------
R-Bot - Discord Bot
-----------------
${client.user.username}

Connected to:
${client.guilds.size} servers
${client.channels.size} channel
${client.users.size} users

-----------------

Use this url to bring your bot to a server:
https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=268528752&scope=bot`);
});

//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
client.on('ready', () => {
   client.user.setGame(("R-help"),`تويش حضك`);
    
});
client.on("message", message => {
    if(message.author.id !== "274923685985386496") return;

    if(message.content === "R-stop"){
        console.log("your say stop for this i'm closed");
        return process.exit(1);
    }
});
///restartbot///
client.on("message", message => {
    if(message.author.id !== "274923685985386496") return;

    if(message.content === "R-restart"){
        console.log("your say restart for this i'm closed");
        return process.exit(26);
    }
});

client.on("message", message => {
 if (message.content === "R-Ch ac") {

  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(` 
   ** بوت R أوآمر **
        للتفعيل 
R-Ch ac1  ⇏  لتفعيل عداد اعضاء السيرفر
R-Ch ac2  ⇏  لتفعيل روم والوقت
R-Ch ac3  ⇏  لتفعيل روم التاريخ
`);


message.channel.sendEmbed(embed)

}
}); 
////////////ALPHA BEST
client.on("message", message => {
 if (message.content === "R-helpvc") {

  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(` 
   ** بوت R أوآمر **
R-v2 ⇏ لإنشاء روم صوتي لمدة دقيقتين
R-v4 ⇏ لإنشاء روم صوتي لمدة 4 دقائق 
R-c2 ⇏ لإنشاء روم كتابي لمدة دقيقتين
R-c4 ⇏ لإنشاء روم كتابي لمدة 4 دقائق
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
R-inv ⇏  لدعوة آلبوت لسيرفرك
R-sug  ⇏  لإرسآل أقترآح لمبرمج آلبوت
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
أو من خلال الرابط التالي :
https://discordapp.com/api/oauth2/authorize?client_id=423917382474399756&permissions=268528752&scope=bot

`);


message.channel.sendEmbed(embed)

}
}); 
client.on("message", message => {
 if (message.content === "R-help") {

  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(` 
   ** بوت R أوآمر **
R-Build R ⇏ لأنشآء رومات كتابيه وصوتيه
R-Build Rr ⇏ لأنشآء رتب
R-role ⇏ لإعطآء عضو رتبة 
R-cv ⇏ لإنشاء روم صوتي  
R-ct ⇏ لإنشاء روم كتابي
R-dvc ⇏ لحذف الروم صوتي أم كتآبي
R-v2 ⇏ لإنشاء روم صوتي لمدة دقيقتين
R-v4 ⇏ لإنشاء روم صوتي لمدة 4 دقائق 
R-c2 ⇏ لإنشاء روم كتابي لمدة دقيقتين
R-c4 ⇏ لإنشاء روم كتابي لمدة 4 دقائق
R-cr1 ⇏ إنشآء 50 لون مرتب
R-cr2 ⇏ إنشآء 100 لون مرتب
R-cr3 ⇏ إنشاء 130 لون مرتب
R-Ch ⇏ لإنشآء روم ساعة وتاريخ وأعدآد الأعضآء
R-Ch ac ⇏ لتفعيل روم الساعة والتاريخ والاعضاء
R-delete ro ⇏ لحذف جميع الرتب بشرط رتبة البوت فوق الرتب المراد حذفها
R-delete vc ⇏ لحذف جميع الرومات الصوتية والكتابيةة
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
R-inv ⇏  لدعوة آلبوت لسيرفرك
R-uptime ⇏  لرؤيةة مدة تشغيل البوت
R-sug ⇏  لإرسآل أقترآح لمبرمج آلبوت
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
أو من خلال الرابط التالي :
https://discordapp.com/api/oauth2/authorize?client_id=423917382474399756&permissions=268528752&scope=bot

`);


message.channel.sendEmbed(embed)

}
}); 
 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('R-bc.')){
 if(!message.author.id === '274923685985386496') return;
message.channel.sendMessage('جار ارسال الرسالة');
message.channel.sendMessage(`[ ${client.users.size} / ${client.users.filter(m => m.presence.status !== 'online').size} ] عدد المستلمين `);

client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
     if (message.content === "R-bot") {
 if(!message.author.id === '274923685985386496') return;
message.channel.sendMessage(`
 ${client.guilds.size} عدد السيرفرات 
[ ${client.users.size} / ${client.users.filter(m => m.presence.status !== 'online').size} ] عدد المستخدمين
 
`);
    }
});

///////////ALPHA BEST
client.on('message', function(message) {
    if(message.content.startsWith('الاقتراقااااح')) {
        if (message.author.id === client.user.id) return;
           client.channels.get("425722207222628373").send(`
\n\n\`\`\`${message.content}\`\`\` 
 <@!${message.author.id}> من قبل
`);
    }
});


 client.on('message' , message => {
    if (message.content === "R-inv") {
        if(!message.channel.guild) return message.reply('**This Command is Only For Servers**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot | انقر هنا لاضافة البوت')
 .setURL('https://discordapp.com/api/oauth2/authorize?client_id=423917382474399756&permissions=268528752&scope=bot')
  message.channel.sendEmbed(embed);
   }
});
 client.on('message' , message => {
    if (message.content === "R-invite") {
        if(!message.channel.guild) return message.reply('**This Command is Only For Servers**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot | انقر هنا لاضافة البوت')
 .setURL('https://discordapp.com/api/oauth2/authorize?client_id=423917382474399756&permissions=268528752&scope=bot')
  message.channel.sendEmbed(embed);
   }
});


client.on("guildCreate", guild => {
console.log(` R bot Added From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
});


client.on("guildDelete", guild => {
console.log(`  R bot Leave From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
});


client.on("guildCreate", guild => {
client.channels.get("425722377406644224").send(`
R-Bot added :white_check_mark: 
${guild.name} اسم السيرفر
${guild.owner.user.username} اونر السيرفر
${guild.memberCount} أعضآء السيرفر
`)
});

client.on("guildDelete", guild => {
client.channels.get("425722377406644224").send(`
R-Bot Kicked :x: 
${guild.name} اسم السيرفر
${guild.owner.user.username} اونر السيرفر
${guild.memberCount} أعضآء السيرفر
`)
});

/الفا كودز
client.on('message', message => {
if (message.content === ("R-uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});



client.on("message", (message) => {
if (message.content.startsWith("R-ct")) {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return  message.reply("أنت ليس لديك برمشن  `MANAGE_CHANNELS`  ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
if (message.content.startsWith("R-cv")) {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return  message.reply("أنت ليس لديك برمشن  `MANAGE_CHANNELS`  ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

////// حقوق الفا كودز


client.on("message", (message) => {
    if (message.content.startsWith('R-dvc')) {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return  message.reply("أنت ليس لديك برمشن  `MANAGE_CHANNELS`  ");
        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('** الرجآء إدخآل أسم الروم المراد حذفه **').catch(console.error);
        channel.delete()
        message.channel.sendMessage('تم حذف الروم بنجاح')
    }
});
client.on("message", (message) => {
    if (message.content.startsWith('R-dvfff')) {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return  message.reply("أنت ليس لديك برمشن  `MANAGE_CHANNELS`  ");
        let args = message.content.split(' ');
        message.channel.setTopic(args);
        message.channel.sendMessage('تم حذف الروم بنجاح');
    }
});

	


client.on("message", (message) => {
if (message.content === ("R-Ch")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send("**أنت ليس لديك برمشن** `ADMINISTRATOR`" );
	      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

    message.guild.createChannel('hour', 'voice');
    message.guild.createChannel('date', 'voice');
    message.guild.createChannel('member', 'voice');
message.channel.sendMessage('**تم إنشاء روم ساعة :small_orange_diamond:**');
message.channel.sendMessage('**تم إنشاء روم تاريخ :small_orange_diamond:**');
message.channel.sendMessage('**تم إنشاء روم عداد الأعضآء :small_orange_diamond:**');
message.reply ("لتفعيل الرومات اكتب `R-Ch ac`");  
}
});




		

client.on("message", message => {
if (message.content === ("R-Ch ac1")) {
let channel = message.client.channels.find('name', "member");
let muteRole = client.guilds.get(message.guild.id).channels.find('name', 'member');
if (!muteRole) return message.reply("** قم بإنشآء الرومات اولا عن طريق الامر R-Ch **").catch(console.error);
if(!message.channel.guild) return message.reply('**Commands in the server**');
if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
channel.edit({name : `memberCount「${message.guild.memberCount}」`});
message.channel.sendMessage("تم تفعيل الروم بنجاح")
      
  }
});






client.on("message", message => {
  if (message.content === ("R-Ch ac2")) {
          let channel = message.client.channels.find('name', "hour");
           let muteRole = client.guilds.get(message.guild.id).channels.find('name', 'hour');
  if (!muteRole) return message.reply("** قم بإنشآء الرومات اولا عن طريق الامر R-Ch **").catch(console.error);
             if(!message.channel.guild) return message.reply('**Commands in the server**');
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
              var currentTime = new Date(),
            hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 3,
            day = currentTime.getDate(),
            week = currentTime.getDay();
           
 
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
    channel.edit({name : "🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」"});
  message.channel.sendMessage("تم تفعيل الروم بنجاح");
  }
});
client.on("message", message => {
    if (message.content === ("R-Ch ac3")) {
          let muteRole = client.guilds.get(message.guild.id).channels.find('name', 'date');
  if (!muteRole) return message.reply("** قم بإنشآء الرومات اولا عن طريق الامر R-Ch **").catch(console.error);
           
                   if(!message.channel.guild) return message.reply('**Commands in the server**');
	        if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
            
          let channel = message.client.channels.find('name', "date");
              var currentTime = new Date(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            week = currentTime.getDay();
   
    channel.edit({name : "📅 - Date " + "「" + day + "-" + month + "-" + years + "」"});
message.channel.sendMessage("تم تفعيل الروم بنجاح");
}
});


   client.on('message', message => {
    if (message.channel.guild) {
   if (message.content === 'R-delete ro') {
	         if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return ;
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return   ;
    message.guild.roles.forEach(x=>{
    x.delete()
})
    
       }}
    });
    
    	client.on('message', message => {
	       if (message.content === ("R-delete ro")) {
		             if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))

	                     if(!message.member.hasPermission('ADMINISTRATOR')) return   message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
    
     if (message.author.bot) return;

               message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('`` تم حذف الرتب بنجاح ``')});
 

          
        }
});


   client.on('message', message => {
    if (message.channel.guild) {
   if (message.content === 'R-delete vc') {
	         if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return   message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
      message.guild.createChannel('general', 'text');
    message.guild.createChannel('general', 'voice');

    message.guild.channels.forEach(x=>{
    x.delete()
})
    
       }}
    });


client.on('guildCreate', guild => {
    
  var rebel = new Discord.RichEmbed()
  .setColor(000000)
		.setDescription('** شكرآ لك لإضافة بوت الرومات الخاص بنا , آستمتع  **')
		.setFooter(" R-Bot Team ")
      guild.owner.send(rebel);
});


client.on('message', message => {

  if (message.content.startsWith("R-sug")) {

  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
                if (!args) return message.reply('** ضع أقترآحك  **').catch(console.error);
  client.channels.get("425722207222628373").send(
      "\n" + "" + "● السيرفر :" + "" +
      "\n" + "" + "» " + message.guild.name + "" +
      "\n" + "" + " ● المرسل : " + "" +
      "\n" + "" + "» " + message.author.tag + "" +
      "\n" + "" + " ● الرسالة : " + "" +
      "\n" + "" + args + "");
      message.reply("** تم إرسآل أقترآحك بنجاح **");
  }
  });

var prefix= "R-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
          if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });

var prefix = "R-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'v4')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
          if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 240000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });
var prefix= "R-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'c2')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
          if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'chat').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporaryText : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الكتابي`), 120000))  // 120000 دقيقتان
    }
    });

var prefix= "R-";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'c4')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
          if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'chat').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporaryText : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الكتابي`), 120000))  // 120000 دقيقتان
    }
    });

client.on('message', message => {
	
	if (message.content === "R-Build RRfrr") {
		      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))

	              if(!message.channel.guild) return message.reply('** This command only for servers **');
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
		          const embed = new Discord.RichEmbed()
		.setDescription('** __:ok_hand: running...to make roles | يتم الأن عمل الرتب__ **')
		.setColor('RANDOM')
		.setFooter("** R-Bot Build **")
	message.channel.sendEmbed(embed);
		   

  message.guild.createRole({
        name : "Nick",
        permissions :   [67108864],
        color : " #ffffff"
    })
    
    
 message.guild.createRole({
        name : "Pic",
        permissions :   [4096],
        color : " #ffffff"
    })
 
 message.guild.createRole({
        name : "mention",
        permissions :   [131072],
        color : " #ffffff"
    })
 
  message.guild.createRole({
        name : "invite",
        permissions :   [1],
        color : " #ffffff"
    })
 
 
 
 
  console.log(`i make rools in this server: ** ${message.guild.name} ** `);
}
});



client.on('message', message => {
         if (message.content === "R-Build R") {
		       if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

                       if(!message.channel.guild) return message.reply('** This command only for servers **');
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
	const embed = new Discord.RichEmbed()
		.setDescription('** __:ok_hand: running...to make Channels | يتم الأن عمل الرومات الصويتة والكتابية__ **')
		.setColor('RANDOM')
		.setFooter("**R- Bot Build**")
	message.channel.sendEmbed(embed);

message.guild.createChannel('Info', 'text');
message.guild.createChannel('Welcome', 'text');
message.guild.createChannel('Chat', 'text');
message.guild.createChannel('bot', 'text');
message.guild.createChannel('bo7', 'text');
message.guild.createChannel('pic', 'text');
message.guild.createChannel('cut', 'text');
message.guild.createChannel('log', 'text');
message.guild.createChannel('admin-chat', 'text');
message.guild.createChannel('▓▬▬▬ADMNS▬▬▬▓', 'voice');
message.guild.createChannel('Owner - مالك السيرفر', 'voice');
message.guild.createChannel('Co Owner - نائب الرئيس', 'voice');
message.guild.createChannel('Dev - مبرمج السيرفر', 'voice');
message.guild.createChannel('Admin - مشرف', 'voice');
message.guild.createChannel('Mod - مود', 'voice');
message.guild.createChannel('▓▬▬▬Other▬▬▬▓', 'voice');
message.guild.createChannel('[ R E C ] 🎥', 'voice');
message.guild.createChannel('YouTubers - يوتيوبرز', 'voice');
message.guild.createChannel('VIP + - كبار الشخصيات بلس', 'voice');
message.guild.createChannel('VIP - كبار الشخصيات', 'voice');
message.guild.createChannel('Friends - اصدقاء', 'voice');
message.guild.createChannel('▓▬▬▬WEL▬▬▬▓', 'voice');
message.guild.createChannel('Help - مساعدة', 'voice');
message.guild.createChannel('Ξ〖 اقـتـراحـاتـكمـ 💡 〗', 'voice');
message.guild.createChannel('▓▬▬▬♚▬▬▬▓', 'voice');
message.guild.createChannel('♧ Ξ〖 🎤  سواليف 📣  〗', 'voice');
message.guild.createChannel('♢ Ξ〖 🎤 مواهب 🎵  〗', 'voice');
message.guild.createChannel('❋ Ξ〖 🎈فعاليات 🏅 〗', 'voice');
message.guild.createChannel('❋ Ξ〖  🕋 القرآن الكريم  〗', 'voice');
message.guild.createChannel('▓▬▬▬♛▬▬▬▓', 'voice');
message.guild.createChannel('☆  Ξ〖 🔞  السجن العام 🔪 〗', 'voice');
message.guild.createChannel('▓▬▬▬Games▬▬▬▓', 'voice');
message.guild.createChannel('Clash of Clans | كلاش أوف كلانز', 'voice');
message.guild.createChannel('Clash Royal | كلاش رويال', 'voice');
message.guild.createChannel('Hajwala  Online | هجولة أون لاين', 'voice');
message.guild.createChannel('Bullet force | بولت فورس', 'voice');
message.guild.createChannel('MTA | ام تي اي', 'voice');
message.guild.createChannel('Ludo Star | لودو ستار', 'voice');
message.guild.createChannel('▓▬▬▬Private▬▬▬▓', 'voice');
message.guild.createChannel('✿Tow✿', 'voice');
message.guild.createChannel('✿Three✿', 'voice');
message.guild.createChannel('✿Four✿', 'voice');
message.guild.createChannel('✿Five✿', 'voice');
message.guild.createChannel('✿Six✿', 'voice');
message.guild.createChannel('▓▬▬▬AFK▬▬▬▓', 'voice');
message.guild.createChannel('Away From keyboard AFK', 'voice');
message.guild.createChannel('▓▬▬▬♚▬▬▬▓', 'voice');

  console.log(`i make text channels in this server: ** ${message.guild.name} ** `)
  
}
});
client.on('message', message => {
	
	if (message.content === "R-Build Rr") {
		      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))

	              if(!message.channel.guild) return message.reply('** This command only for servers **');
	                         if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
		          const embed = new Discord.RichEmbed()
		.setDescription('** __:ok_hand: running...to make roles | يتم الأن عمل الرتب__ **')
		.setColor('RANDOM')
		.setFooter("** R-Bot Build **")
	message.channel.sendEmbed(embed);
		   

  message.guild.createRole({
        name : "Owner",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Co-Owner",
        permissions :   [1],
        color : " #ffffff"
    })
      message.guild.createRole({
        name : "Leader",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Co-Leader",
        permissions :   [1],
        color : " #ffffff"
    })
  
     message.guild.createRole({
        name : "Admin",
        permissions :   [1],
        color : " #ffffff"
    })
    

  
    message.guild.createRole({
        name : "Mod",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "ＶＩＰ + ",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "ＶＩＰ",
        permissions :   [1],
        color : " #ffffff"
    })
    message.guild.createRole({
        name : "Support ",
        permissions :   [1],
        color : " #ffffff"
    })

  message.guild.createRole({
        name : "YouTuber+200",
        permissions :   [1],
        color : " #ffffff"
    })
   
    message.guild.createRole({
        name : "YouTuber",
        permissions :   [1],
        color : " #ffffff"
    })
    
      message.guild.createRole({
        name : "Pro Member☤",
        permissions :   [1],
        color : " #ffffff"
    })
    
          message.guild.createRole({
        name : "🌹「Friendly」",
        permissions :   [1],
        color : " #ffffff"
    })
  
 
    message.guild.createRole({
        name : "☤Member☤",
        permissions :   [1],
        color : " #ffffff"
    })
    
        message.guild.createRole({
        name : "Bot",
        permissions :   [1],
        color : " #ffffff"
    })
 
  console.log(`i make rools in this server: ** ${message.guild.name} ** `);
}
});

var prefix = 'R-';

client.on('message', message => {
    if(message.content === prefix + 'cr2') {
	    		      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#FFB6C1",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#FFC0CB",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#FF69B4",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#FF1493",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#DB7093",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C71585",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#E6E6FA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#D8BFD8",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#DDA0DD",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#DA70D6",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#EE82EE",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#FF00FF",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#BA55D3",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#9932CC",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#9400D3",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#8A2BE2",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#8B008B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#800080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#9370DB",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#7B68EE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#6A5ACD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#483D8B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#663399",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#4B0082",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#FFA07A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#FA8072",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#E9967A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#F08080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#CD5C5C",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#DC143C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "	#FF0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#B22222",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#8B0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#FFA500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#FF7F50",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#FF6347",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#FF4500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#FFD700",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#FFFFE0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#FFFACD",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#FAFAD2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "	#FFEFD5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#FFE4B5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#FFDAB9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#EEE8AA",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#F0E68C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#BDB76B",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ADFF2F",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#7FFF00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#7CFC00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#00FF00",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#32CD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#98FB98",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#90EE90",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#00FA9A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#00FF7F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#3CB371",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#008000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#006400",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })     

          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``تم انشاء 100 لون بنجاح ``')});
    }
	});
	

var prefix = 'R-';

client.on('message', message => {
    if(message.content === prefix + 'cr3') {
	    		      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))

                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#FFB6C1",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#FFC0CB",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#FF69B4",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#FF1493",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#DB7093",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C71585",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#E6E6FA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#D8BFD8",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#DDA0DD",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#DA70D6",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#EE82EE",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#FF00FF",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#BA55D3",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#9932CC",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#9400D3",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#8A2BE2",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#8B008B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#800080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#9370DB",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#7B68EE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#6A5ACD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#483D8B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#663399",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#4B0082",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#FFA07A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#FA8072",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#E9967A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#F08080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#CD5C5C",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#DC143C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "	#FF0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#B22222",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#8B0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#FFA500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#FF7F50",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#FF6347",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#FF4500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#FFD700",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#FFFFE0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#FFFACD",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#FAFAD2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "	#FFEFD5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#FFE4B5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#FFDAB9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#EEE8AA",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#F0E68C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#BDB76B",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ADFF2F",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#7FFF00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#7CFC00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#00FF00",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#32CD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#98FB98",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#90EE90",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#00FA9A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#00FF7F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#3CB371",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#008000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#006400",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "101",
                    color: "#F4A460",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "102",
                    color: "#DAA520",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "103",
                    color: "#B8860B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "104",
                    color: "#CD853F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "105",
                    color: "#D2691E",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "106",
                    color: "#808000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "107",
                    color: "#8B4513",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "108",
                    color: "#A0522D",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "109",
                    color: "#A52A2A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "110",
                    color: "#800000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "111",
                    color: "#FFFFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "112",
                    color: "#FFFAFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "113",
                    color: "#F0FFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "114",
                    color: "#F5FFFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "115",
                    color: "#F0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "116",
                    color: "#F0F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "117",
                    color: "#F8F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "118",
                    color: "#F5F5F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "119",
                    color: "#FFF5EE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "120",
                    color: "#F5F5DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "121",
                    color: "#FDF5E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "122",
                    color: "#FFFAF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "123",
                    color: "#FFFFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "124",
                    color: "#FAEBD7",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "125",
                    color: "#FAF0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "126",
                    color: "#FFF0F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "127",
                    color: "#FFE4E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "128",
                    color: "#DCDCDC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "129",
                    color: "#D3D3D3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "130",
                    color: "#C0C0C0",
                    permissions: []
     })     

          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``تم انشاء 130 لون بنجاح``')});
    }
	});
	
	


var prefix = "R-"
client.on('message', message => {
    if(message.content === prefix + 'cr1') {
	    		      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_ROLES ` **").then(msg => msg.delete(6000))
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#cf1111",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#df5d11",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#dfab11",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#dfde11",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#a8df11",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#64c40c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#38c30c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#0cc33f",
                    permissions: []
     })
   
                     message.guild.createRole({
                  name: "9",
                    color: "#0cc36c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#0cc394",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#0cc3ad",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#0cb1c3",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#0c9ec3",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#0c8ac3",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#0c6cc3",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#0c49c3",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#0c2bc3",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#150cc3",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#880cc3",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#b50cc3",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#c30cb8",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#c30c90",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#c30c63",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#c30c4a",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#c30c31",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#ff0000",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#ff4200",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#ff6c00",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#ff8f00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "	#ffd400",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#e4ff00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#adff00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#60ff00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#14ff00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#00ff40",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#00ff8c",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#00ffc4",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#00e7ff",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#009aff",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#0055ff",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#0001ff",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "	#6700ff",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#ad00ff",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#dd00ff",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#ff00fe",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#ff00cd",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#ff0096",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ff0057",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#ff002d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#050505",
                    permissions: []
     })
                                
               message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``تم انشاء 50 لون بنجاح ``')});
    }
	});
       
client.on('message', message => {
         if (message.content === 'R-cm1f') {
      if (!message.channel.guild) return;
    message.channel.sendFile('https://c.top4top.net/p_774o4pw41.png');
  }
	
});

//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

       
client.login(process.env.BOT_TOKEN);
