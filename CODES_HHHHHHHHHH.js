```  const froos = {
       ping :    function() { //هنا مكان ping تحط الاسم الي تبيه يعني لو تكتب ping في اي كود يطلع لك الي تحت
            message.channel.send("pong")
        }

    },
       id: function() {
            message.channel.send(arguments[0].author.id)
        }

    },
    copyright: "© 2018 - codes"
}
module.exports = froos;
  
 ```
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  هذا الكود للبكجات يعني لو عندك بكج وتبغا تعرف الكود . 

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  client.on('guildMemberAdd', member => {
  member.addRole('name', "• New")
});

client.on('message', message => {
  let log = message.guild.channels.find('name', "log") 
  let act = message.guild.roles.find('name', "• Verified")
  let user = message.mentions.members.first();
  if(message.content.startsWith(prefix + "act")){
    var embed = new Discord.RichEmbed() 
    .setAuthor(message.author.username) 
    .setThumbnail(user.avatarURL)
    .addField('User Activated', ${user} get rank ${act})
    .addField('By', <@${message.author.id}>)
    .setTimestamp()
    .setFooter("Codescopyright")
  log.send({embed})
  message.channel.send({embed})
  user.addRole(${act})
  }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود التفعيل :
يوم الواحد يدخل السيرفر يجيه رانك. • New
كيف تفعله؟؟ 
تكتب : -act <Mention>
ويجيه رانك : • Verfied
يمديك تغير اسماء الرانكات
يتطلب وجود روم : #log 
 

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 


  client.on('msg', msg => {
  var prefix = ".";
  if(msg.content.startsWith(prefix + "Sfa"){
    var embed = new Discord.RichEmbed()
    .setAuthor("Walshts1996@gmail.com:royalegames123 , دا الحساب للقمدين فقط , غير مسموح للنرميون")
    .setThumbnail(user.avatarURL)
message.channel.send(embed)
  }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود قمد بفتيقه , يعطيك حساب ماين كفرات فل داتا :shy:  
 
  
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
    const Discord = require('discord.js');
const epic = new Discord.Client();

epic.on('ready',async () => {
  epic.channels.find(ch => ch.id === "اي دي الروم الصوتية" && ch.type === 'voice').join();
});

// طبعا عشان الكود يشتغل بكفاءة لازم يكون البوت مفتوح 24 ساعة
// البوت بيخرج برا الروم اذا الخادم قفل
// جميع الحقوق محفوظة لسيرفر كودز

epic.login("التوكن")
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود تثبيت البوت في الروم الصوتي - طبعا بتحط التوكن واي دي الروم وبس - من طلب الاخ : @Hady Khaled 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  const devs = ["your id"];
const adminprefix = [" type a prefix "];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developer.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود تغيير الحالات , 
طبعا الكود اعادة رفع لان شخص الله يستر عليه كتبه برجلينه 
وصار فيه اخطاء 
 

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // لو موجودات بكودك لاتكتبهم ثاني 
var Discord = require('discord.js');
var client = new Discord.Client();
var prefix = "-" ; // البرفكس 


client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    if (command == "leave") {
        // if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Sorry, you don't have permission to use this!**");
        
 
        if(message.author.id != " حط الاي دي حقك هنااااا ") return message.reply("**Sorry, you don't have permission to use this!**");/* لو سمحت حط الايدي حقك*/

        
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
        let definedGuild = client.guilds.get(args[0])
        if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`);
        client.guilds.get(args[0]).leave()
        .catch(error => { return message.reply(error.message) })
    }     
})
client.login("  "); // حط توكن البوت داخل 


// الاي دي و التوكن لانساهم : |
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود يطلعلك البوت من السيرفر

لاتنسى الاي دي حقك

-leave <guild_id> 
 

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var cs = ["red" , "green" , "blue" , "cyan" , "pink" , "white"]

function s(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
// numS
var r = s(n);
console.log(r)
// colors
var rc = s(cs);
console.log(rc)
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود يختارلك عشوائي من مصفوفة 
(بدون تكرار)
المصدر ستاك اوفر فلو
المهم عدلت فيه كثير 
ان شاء الله يفيدكم 


   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  https://hastebin.com/liduhufuca.coffeescript
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود الردود الموجود في باور بوت
جميع الحقوق محفوظه لكودز ولي وليوسف صاحب االكود ..  
لازم تسوي ملف جيسون بأسم responses.json
وتحط فيها {}** 

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  client.on('message',async message => {
  if(message.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`\`${message.guild.name}\``)
    .setThumbnail(message.guild.iconURL)
    .addField('• iD:', `- ${message.guild.id}`,true)
    .addField('• Owner:', `- ${message.guild.owner}`, true)
    .addField('• Channels:', `\`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}`, true)
    .addField('• Members:', `\`Count\` ${message.guild.memberCount} - \`Last\` ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m}`).splice(0, 1)}`, true)
    .addField('• AFK Channel:', `${message.guild.afkChannel || 'None'}`, true)
    .addField('• Other:', `\`Roles\` ${message.guild.roles.size} - \`Emojis\` ${message.guild.emojis.size} \`[\` ${message.guild.emojis.map(m => m).join(' **|** ')} \`]\``,true)
    .addField('• Region:', `${message.guild.region}`, true);

    message.channel.send(embed);
  }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود معلومات عن السيرفر قمد زوحليقه .. :shy:  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-   
  http://jsfiddle.net/m14tyvp8/1/embedded/js/#JavaScript
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  الكود كان منشور بس عدلت الرابط لان  الرابط خرب 
  كود الرولات بالرياكشن 
طريقة الاستخدام

1 - تكتب الامر 
-autoc <اسم الرول>

2 - تحط الرياكشن الي بدك في الرسالة الي بدك  في الروم الي بدك 

وخلاص الحين اي واحد يحط رياكشن في الرسالة راح تجيه الرتبة 
حقوق كودز + مكتوب بإيدي  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  //كود استريمنق
client.on('ready',  () => {
            console.log(`back`);
    client.user.setGame("codes", "https://www.twitch.tv/idk");
});
// كود الواتشينق
client.on('ready', () => {
        console.log(`back`);
              client.user.setActivity("codes", {type: 'WATCHING'});
      
      });
// كود اللينسق
      client.on('ready', () => {
        console.log(`back`);
              client.user.setActivity("codes", {type: 'LISTENING'});
      
      });
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود الواتشينق 
اللينسق
الاستريمنق 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  client.on('message', warn => {
  var prefix = ".";
  let log = warn.guild.channels.find('name', "log")
  let all = warn.guild.channels.find('name', "public-chat")
  let user = warn.mentions.members.first();
  let reason = warn.content.split(" ").slice(2).join(' ') 
  if(warn.content.startsWith(prefix + "warn"){
    var embed = new Discord.RichEmbed()
    .setAuthor("New Warn !")
    .setThumbnail(user.avatarURL)
    .addField("User Warned", `${user}`)
    .addField("Warned By", `<@${warn.author.id}>`)
    .addField("Reason" , `${reason}`)
  log.send({embed})
  all.send({embed}
  }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود بسيط تحمايه للاكواد الجاي
الكود عباره عن تحذير 
يلزم وجود رومين : #log , #public-chat
طريقه الكود : -warn  @! F4řəŝ ツ » BłøćķşMĆ « الكتابه بالشات غير الصحيح 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  const afk = require('./afk.json');
client.on('message',async rebel => {
      if(rebel.author.bot) return;
  if (afk[rebel.author.id]) {
    delete afk[rebel.author.id];
    if (rebel.member.nickname === null) {
      msg.channel.send("أهلا بك , <@"+rebel.author.id+"> أنأ **أحاول** أن أزيل عنك الأفك.");     } else {
      rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
      rebel.channel.send("أهلا بك , <@"+rebel.author.id+"> تم فك عنك الأفك بسبب رجوعك."); 
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
} else {
    if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
      rebel.member.setNickname("[AFK] " + rebel.member.displayName);
      let args1 = rebel.content.split(' ').slice(1);
      if (args1.length === 0) {
        afk[rebel.author.id] = {"reason": true}; 
        rebel.reply("** لقد وضعتك بوضع الأفك **")
      } else {
        afk[rebel.author.id] = {"reason": args1.join(" ")}; // with reason
        rebel.reply("لقد أضفتك للأفك بسبب "+ args1.join(" ") + ".")
      }
      fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});   
  }
}
         var mentionned = rebel.mentions.users.first();
if(rebel.mentions.users.size > 0) return ;
if (afk[rebel.mentions.users.first().id]) {
if (afk[rebel.mentions.users.first().id].reason === true) {
rebel.channel.send(`**<@!${mentionned.id}> مأفك** `);
}else{
rebel.channel.send(`**<@!${mentionned.username}> مأفك , سبب الأفك \n ${afk[rebel.mentions.users.first().id].reason}**`);
}
} 
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود Afk
سو ملف 
afk.json
وأكتب فيه {}
وشغل 
جميع الحقوق لريبل فقط .... 
 

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  https://pastebin.com/GnU7aS0v
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود الميوزك 
كان منشور من قبل في ملف بس حطيته بالموقع علشان يكونن سهل 
copyright code & ♯ 𝐑eBeL .#0001 © 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', msg => {
  if(msg.content === 'الرسالة')
  msg.reply('الرد')
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود اقوا تهكير سيرفرات فلعالم 
الحقوق : سيرفر كودز ستار لانهم تعبو فيه ايام كثيرة وتعبو فيه كثير وحابين نشركهم على مجهوداتهم 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
 https://pastebin.com/ewTF2g08
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  
كود التهكير النسخة المطورة :JavaScript: 
طبعا امر العبة : :tools: 
تهكير @منشن :ok_hand::skin-tone-1: 
طبعا حقوق كودز فقط يمنع تداولة خارج السيرفر © 
 
 

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on("message", message=> {
  if (message.content.startsWith("./sayTo")) {
    let filter = m => m.author.id === message.author.id
    let channelBOT = ""
    let messageBOT = ""
    message.channel.send(("", {embed: {
      title: "` ➡ `** Messege System **",
      color: 0x06DF00,
      timestamp: new Date(),
      description:"قم بكتابة ايدي الغرفة",
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Codes BOT"
      }} 
    })).then((messageArray1)=>{
        message.delete(/*Codes*/)
        message.channel.awaitMessages(filter ,{max:1,time:30000,error:['time'],} ).then(pop1=>{
          channelBOT = pop1.first(/*Codes*/).toString()
          pop1.first().delete(/*Codes*/)
          messageArray1.delete(/*Codes*/)
          message.channel.send(("", {embed: {
            title: "` ➡ `** Messege System **",
            color: 0x06DF00,
            timestamp: new Date(),
            description:"قم بكتابة الرسالة",
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Codes BOT"
            }} 
          })).then((messageArray2)=>{
            message.channel.awaitMessages(filter ,{max:1,time:30000,error:['time'],} ).then(pop2=>{
              messageBOT = pop2.first(/*Codes*/)
              pop2.first().delete(/*Codes*/)
              messageArray2.delete(/*Codes*/)
            message.guild.channels.find("id",channelBOT).sendMessage(messageBOT.toString())
                })
            })
        })
     })
    }
})
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود يقوم بإرسال رسالة الى روم
- انت تحدد الروم بلأيدي
- انت تحدد الرسالة 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "id")) {
           if (message.channel.id !== "ايدي الروم الي تبي فيه الامر") return;
            
            if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود اليوزر نفس البروبوت بالضبط 
 

   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
كود منع الجحفلهه أفضل ب 10 مرات من المنشور داتا مؤقت يعني م تحتآج ملفات ولا شيءء وكل شيء من الصفر بيدي سويتهه 
- حقوق كودز فقط . 
https://hastebin.com/waxeqivajo.js
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
كود مطلوب مره
كود تم دعوتك بواسطه .
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "اسم سرفرك هنا")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'اسم روم اللي برسل فيها');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "اسم سرفرك هنا")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` ♥ **تم دعوته من قبل ${Invite.inviter} ♥ `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});

By @تذكروني بدعوة حلوة

@everyone
الكود فيه مشكلة لو رابط الدعوه لشخص واحد فقط مايعطي اسم الداعي
الي يعرف يحلها يحلها

 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
كود النشر مطور
ميزته اذا الشخص دخل سيرفرك م راح ينشر له مرة ثانية ويزعجه اذا دخل سيرفر ثاني البوت فيه

ملاحظة : 
حط ايدي السيرفر مكان ID of Server

@here 

const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === 'ID of Server') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`عبارة النشر الثالثة`,`عبارة النشر الثانية`,`عبارة النشر الأولى`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login('توكن البوت');
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const hastebin = require('hastebin-gen');
client.on('message', message => {
var PREFIX = 'البرفكس';
    if(message.content.startsWith(PREFIX + 'dis')) {
            var args = message.content.split(' ').slice(1).join(' ');
}
      var array = [];
      var i = 0;
      if(args){
client.users.filter(u => u.discriminator == args).map(u => {
    if(i > 4){
     return;
    }
    i = i + 1;

   array.push(`${u.tag}`);
});
}
hastebin(`${array.slice(0, 30).join('\n')}`, 'txt').then(l => {
    message.channel.send(`${l}`);
}).catch(console.error);
});
client.on('message' , message => {
var PREFIX = 'البرفكس';
if(message.content === `${PREFIX}dis`) {
                      let array = [];
                      var i = 0;
client.users.filter(u => u.discriminator == message.author.discriminator).map(u => {
    if(i > 4){
     return;
    }
    i = i + 1;
   array.push(`${u.tag}`);
});
hastebin(`${array.slice(0, 30).join('\n')}`, 'txt').then(l => {
    message.channel.send(`${l}`);
}).catch(console.error);

        }
});

  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 وصف الكود : 
 كود نفس الي في البوت الي هنا #تغيير_التاق 
npm install hastebin-gen

 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  var BOxox = "البرفركس"
  const BOow = ["ايديك"];
if (message.content.startsWith(BOxox + 'الامر')) {
      if(!message.channel.guild) return message.reply(' ');
    if(!message.channel.guild) return;
if( BOow.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**👑 انت صاحب البوت **")
} else {
   message.reply("**🚫 انت لسا صاحب البوت**");   
}
}
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
   كود انت صاحب البوت 
صراحة عجبتني طريقتة وبرمجتة 
طبعا حقوق ملف بوت BOxox bot 
 
 
  تم النشر بواسطة : @جاكيو  بن بآكستآن آل ليمون
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  hero.on('message',async message => {
  if(message.content.startsWith(prefix + "search")) {
    const args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] !== `${prefix}search`) return;
    var Search = require('youtube-search'),
    opts = {maxResults: 1, key: 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8', type: 'video'}

    Search(args, opts, function(err, results) {
      if(err) return console.log(err);

      console.log(results);
      message.channel.send(results[0].link);
    });
  }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود السيرش في اليوتيوب ( فيديو فقط ) ء 
 
  تم النشر بواسطة : @NewAcc: iAmHeRo¹⁵ ☤#1284
❌
1
✅
10
NewAcc: iAmHeRo¹⁵ ☤#128408/20/2018
طبعا اللي عليك انك تنصب البكج youtube-search
وتغيير تعريف hero للكلاينت حقك
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', message => { 
    var prefix = "البرفركس";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'الامر')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('خطأ!');
        });
}
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
   كود اختصار روابط 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', message => {
    if (message.content.startsWith("-bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(${bans.size} عدد اشخاص المبندة من السيرفر))
  .catch(console.error);
}
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
    كود يطلع لك كم شخص امبند من السيرفر 
حقوق سيرفر كودز 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 
  hero.on('message',async message => {
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400);
  let hours = Math.floor(time % 31536000 % 86400 / 3600);
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
  days = days > 9 ? days : '0' + days;
  hours = hours > 9 ? hours : '0' + hours;
  minutes = minutes > 9 ? minutes : '0' + minutes;
  seconds = seconds > 9 ? seconds : '0' + seconds;
  return `${days > 0 ? `${days} Days ` : ''}${(hours || days) > 0 ? `${hours} Hours ` : ''}${minutes} Mins ${seconds} Secs`;
  }
  
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "bot")) {
    let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
    let upTime = timeCon(process.uptime());
    let createdAt = moment(hero.user.createdAt).fromNow();

let m = await message.channel.send(`\`\`\`asciidoc\n= Normal Information =
Creator :: ${hero.users.get("323885452207587329").username} - ${createdAt}
Ping :: ${hero.pings[0]} ms
UpTime :: ${upTime}

= Servers Information =
Servers :: ${hero.guilds.size}
Users :: ${hero.users.size}
Channels :: ${hero.channels.size}

= Developer Information =
NodeJS :: ${process.version}
DiscordJS :: ${Discord.version}
Arch :: ${process.arch}
Platform :: ${process.platform}

= Host Information =
UsedHeap :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB
Heap :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB
Ram :: ${ramUsage} MB
Rss :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB
\`\`\``);
  }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود معلومات البوت بشكل قميل :shy:
زي ما وعدتكم ,_, 
 

 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  https://hastebin.com/axuveqeyoh.js
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود الهلب بالرياكشن 

مثل ما وعدتكم بعمل كود هلب بالرياكشن 
طبعا علشان اضمن ما في رسالة في الخاص 

شرح كيف تستخدمة 

- اولا لازم تكون عامل رسالة للهلب مثلا 
اضغط على :true~1: للهلب 
 
+ تكتب واحد من الاوامر  طبعا البرفكس بتحصلة فوق تقدر تغيرة حقي 
- +set admin help
- +set general help
- +set games help

- بعد كذا البوت راح يقولك تدخل اي دي الروم الي حطيت الرسالة فيها 
- وبعدها بيسألك عن اي دي الرسالة 
- واخر سؤال بيقولك تحط الايموجي الي تريدة للرياكشن 

-- حقوق كودز 
onixes المصدر : ملف بوت
by damit & kimo 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345

  if(!coins[message.author.id]){
    return message.reply("You don't have any coins!")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("Not enough coins there!");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود الدفع او pay 

لازم تسوي ملف اسمه coins.json 

ملاحضة : الكود اكسبورت 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray.slice(1);

if(cmd === `${prefix}serverinfo`);
let sicon = message.guild.displyAvatarURL;
let serverEmbed = new Discord.RichEmbed()
.setDescription("``Server Information``")
.addField("Server Name", message.guild.name)
.addField("Created On", message.guild.createdAt)
.addField("You Joined", message.member.joinedAt)
.addField("Total Members", message.guild.memberCount)
.addField("Server Owner", message.guild.owner.user.username)
.addField("Rooms", message.guild.channels.size)
.addField("Roles", message.guild.roles.size)
.addField("Region", message.guild.region)
.addField("Server ID", message.guild.id);

return message.channel.send(serverEmbed);
})
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود معلومات السيرفر , افضل من برو بوت , وفية كل شئ تبيه 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  
  Client.on('message', message => {

    if (message.content === "-count") {

    let embed = new Discord.RichEmbed()

.addField('**Count**: ' , message.guild.memberCount)
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود count بالامبد 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
@here , جميع الحقوق محفوظه بسيرفر كودز
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  
  client.on('guildCreate', guild => {
client.channels.get("ROOM ID").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("ROOM ID").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود لو بوتك دخل او طلع سيرفر يطلعلك معلومات عنه 
مثل اسمه 
الاونر حقه
الاي دي
عدد الاعضاء 
 
  تم النشر بواسطة : @#MakeCodesGreatAgain
❌
1
✅
20
August 15, 2018
.CodesBOT08/15/2018
@here , جميع الحقوق محفوظه بسيرفر كودز
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  
  client.on('message', message => { //-MaX PicAssO#8266 codes©
  if (message.content === "-id") {
  let embed = new Discord.RichEmbed()//-MaX PicAssO#8266 codes©
.setThumbnail(message.author.avatarURL)  
.setAuthor(message.author.username)//-MaX PicAssO#8266 codes©
.setDescription("**معلومات عن الحــساب**")
            .setFooter(`-MaX PicAssO#8266.©`, 'codes.©')//-MaX PicAssO#8266 codes©
.setColor("#9B59B6")
.addField("**اســـم الحســاب**", `${message.author.username}`)//-MaX PicAssO#8266 codes©
.addField('**تاق الحساب الخاص**', message.author.discriminator)
.addField("**الرقـــم الشـــخصي**", message.author.id)//-MaX PicAssO#8266 codes©
.addField('**بــــوت**', message.author.bot)
.addField("**تاريخ التسجيل**", message.author.createdAt)//-MaX PicAssO#8266 codes©
  //-MaX PicAssO#8266 codes©

message.channel.sendEmbed(embed);
 }
});//تبغى تنشره حط حقوق كودز💙©
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود الاي دي شكله حلو 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
كود لو معاك رتبة وطلعت من السيرفر ودخلت الرتبة بترجع تاني سواء كانت رتبة ادارية او حتي كانت رتبة ميوت
//! KinG66S.❤#0045
var KinG66S = {};//! KinG66S.❤#0045
client.on('guildMemberRemove', member => {//! KinG66S.❤#0045
KinG66S[member.id] = {roles: member.roles.array()};//! KinG66S.❤#0045
});
//! KinG66S.❤#0045 //! KinG66S.❤#0045 //! KinG66S.❤#0045 
client.on('guildMemberAdd', member => {//! KinG66S.❤#0045
if(!KinG66S[member.user.id]) return;//! KinG66S.❤#0045
console.log(KinG66S[member.user.id].roles.length);//! KinG66S.❤#0045
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {//! KinG66S.❤#0045
member.addRole(KinG66S[member.user.id].roles.shift());//! KinG66S.❤#0045
}//! KinG66S.❤#0045
});//! KinG66S.❤#0045
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  const snekfetch = require("snekfetch");
  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + `cat`)) {
            const { body } = await snekfetch.get("http://aws.random.cat/meow");
            return message.channel.send({ file: body.file });
}}});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود يرسل لك صورة كآت بشكل لا نهآئي .. 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content === -help') {
message.author.send(`الرسآلهه`).catch(RebeL =>{console.log('`Error`: ' + RebeL);
message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **")
});
}}});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كثير من النآس م تعرف تسوي كآتش أيرور للي يوصل الخآص الحين لو وآحد كتب الامر وخآصه مقفل رآح يرسلك أنه مقفل . 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', async ReBeLL => {
if(ReBeLL.author.bot) return;
if (ReBeLL.channel.guild) {
if (ReBeLL.content.startsWith(prefix + `8ball`)) {
    let argsReBeL = ReBeLL.content.split(' ').slice(1).join(' ');
    let authorReBeL = ReBeLL.author.username;

    // https://en.wikipedia.org/wiki/Magic_8-Ball
    let ReBeL = [
        //إجآبآت إجآبيه
"هذا مؤكد.",
        "إنه بالتأكيد كذلك" ,
        "بدون أدنى شك.",
        "نعم بالتأكيد.",
        "يمكنك الاعتماد عليه.",
        "كما أرى أنه نعم.",
        "على الأرجح.",
        "توقعات جيدة.",
        "نعم فعلا.",
        "وتشير الدلائل إلى نعم.",

        // إجابات غير ملتزمة
        "الرد المحاولة مرة أخرى ضبابية.",
        "اسأل مرة اخرى لاحقا.",
        "الأفضل أن لا أقول لكم الآن.",
        "لا يمكن التنبؤ الآن.",
        "التركيز والمحاولة مرة أخرى." ,

        // إجابات سلبية
        "لا تعتمد على." ,
        "ردي هو لا.",
        "وتقول مصادري لا.",
        "أوتلوك ليس جيد بما فيه الكفاية.",
        "مشكوك فيه جدا."
    ]
    let randomReBeL = Math.floor(Math.random() * ReBeL.length);

    if (!argsReBeL) return ReBeLL.reply("ask him something.");
    ReBeLL.channel.send(`\:8ball\: | ${ReBeL[randomReBeL]} **${authorReBeL}**`);
}}});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود أسآل الكرة رقم 8 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', message => {
if(message.content.startsWith("$slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود لعبه سلوت -slots 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
@here , جميع الحقوق محفوظه بسيرفر كودز
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  
  bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}botinfo`);
  let bicon = bot.user.displyAvatarURL;
  let botEmbed = new Discord.RichEmbed()

.setDescription("Bot Information")
.setcolor("#15f153")
.setThumbnail(bicon)
.addField("Bot Name", bot.user.username)
.addField("Created on", bot.user.createdAt)
.addField("Users", bot.users.size)
.addField("Servers", bot.guilds.size)
.addField("Channels", bot.channels.size)
.addField("ID", bot.user.id)
.addField("My Prefix", botconfig.token)
.addField("My Language");

    return message.channel.send(botEmbed);
  }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود بوت مطور , من صنعي , اول كود اسوية طبعاَ :joy: 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

 =-=-=-=-=-=-@here , جميع الحقوق محفوظه بسيرفر كودز
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  
  https://github.com/TheOnlyArtz/Seday
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  سورس كودلأحد بوتات الدسكورد يتعامل مع الأكسبرس الي يسوي لك بوت على موقع

لا يوجد دعم فني للسورس كود في حال تبغى تجربه جربه ... 
 
  تم النشر بواسطة : @. RespecT
❌
1
✅
8
@here , جميع الحقوق محفوظه بسيرفر كودز
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  
  https://github.com/AnIdiotsGuide/guidebot
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  سورس كودلأحد بوتات الدسكورد يتعامل مع الأكسبرس الي يسوي لك بوت على موقع

لا يوجد دعم فني للسورس كود في حال تبغى تجربه جربه ...بوت دسكورد جاهز بضغطة زر تثبته

وراح يبرمج لك البوت حقك على صفحة وانت تبدا تعدل عليه

الحقوق محفوظة لـ: An Idiot's Guide

طريقة التثبيت سوف يتم تنزيلها بعد شوي 
 =-=-=-=-=-=-=-=-=-=-=-
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let coins = require("./coins.json");
    
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#5074b3")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  وصف الكود: Coins system 
نفس نظام الكريدتس يعني بس كوينز 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + `Lmgtfy`)) {
            const textQuery = message.content.split(' ').slice(1).join(' ');
        const rebel = encode(message.content.split(' ').slice(1).join(' '));
        const url = `https://lmgtfy.com/?q=${rebel}`;

        if (!rebel) return message.channel.send(`من فضلك أكتب البحث , مثآل : \`${prefix}Lmgtfy How to create a Discord server\`.`);
        else message.channel.send(`"${textQuery}"\n**<${url}>**`);
}}});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود البحث من صنعي كآآمل تفشخه ؟؟ حط حقوق ي بآبآ .. 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
ذا هو اصعب كود بالحياة ، خليته بـ12 سطر (التوب بالجسون)ء
client.on('message', async message=>{
    if(message.author.bot) return;
    var args = message.content.split(' '),mc=message.channel
 , _point = require('./s.json')
 if(message.content=="set"){
 for(var i=0;i<101;i++) _point[i+1] = {name:i+1,points:100-i}
 fs.writeFile('./s.json',JSON.stringify(_point,null, 5))
}
    if(message.content.toLowerCase().startsWith('top')){
        var _Array = Object.values(_point)
     message.channel.send(_Array.slice(1,11).map((data,num)=>`**\`${num+1}\`.** ${data.name+` (${data.points})`}`));
    }});

كسرت عين لمن تحداني :new_moon_with_face::broken_heart:
- By: @.    BaddM6iiir
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message', msg => {
    if(msg.content.startsWith('#link')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود لو منشنت البوت يجيبلك رابط الانفايت حقة ، حقوق @#MakeCodesGreatAgain 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
طبعآ الكود فيه نقص كبير ومن النقص أنه بس يحسب !!
العضو كيف يعرف لفلهه وذي ؟؟
سويت كود بيسط يوضح لك الأكسبي واللفل بالصوت 
client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content === '-myV') {
message.channel.send(`Your XP : ${voice[message.member.id].xp}
Your Level : ${voice[message.member.id].level}`);
      fs.writeFile('./voiceState.json', JSON.stringify(voice, null, 4), (e) => {
        if(e) console.log(e);
      });
}}});


 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  var returned;
hero.on('voiceStateUpdate', (user, member) => {
  if(member.selfDeaf || member.selfMute || member.serverDeaf || member.serverMute) {
    returned = false;
  }
  if(!member.selfDeaf || !member.selfMute ||!member.serverDeaf || !member.serverMute) {
    returned = true;
  }
  setInterval(() => {
    if(returned === true) {
      if(member.bot) return;
      if(!member.voiceChannel) returned = false;
      if(!voice[member.id]) voice[member.id] = {
        xp: 1,
        level: 1
      };
      voice[member.id] = {
        xp: voice[member.id].xp + Math.floor(Math.random() * 4) + 1,
        level: voice[member.id].level
      };
      var curXp = voice[member.id].xp;
      var curLvl = voice[member.id].level;
      if(curXp >= 300) {
        voice[member.id] = {
          xp: 1,
          level: curLvl + 1
        };
      }
      fs.writeFile('./voiceState.json', JSON.stringify(voice, null, 4), (e) => {
        if(e) console.log(e);
      });
    } else if(returned === false) {
      return null;
    }
  },5000);
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود يحسبلك نقاط كل ما قعدت بالرومات الصوتية .
طبعا الكود جيسون ويحتاج انك تسوي voiceState.json 
وتكتب جواه {} 
 
  تم النشر بواسطة : @NewAcc: iAmHeRo¹⁵ ☤#1284
❌
1
✅
6
ريـبـل بن بآكستآن آل ليمون , 🍋08/10/2018
طبعآ نسي سطرين الأول تعريف بكج فايل سيستم والثآني الفويس 
إذآ كنت معرف الفايل سستم مو شرط تحط أول سطر برسله
const fs = require("fs");
const voice = JSON.parse(fs.readFileSync("./voiceState.json", "utf8"));

@here
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message',   message => {
var prefix = "!";
const args = message.content.split(' ').slice(1).join(' ');
                              if(message.content.startsWith(prefix + 'bf')) {
if(message.author.id !== 'ايديك هنا') return;
    client.user.friends.forEach(f =>{
f.send(args)
    })
}
}
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  ترسل رساله لكل الاصدقاء الي عندك 
 

 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  https://hastebin.com/lajuzatabu.nginx
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود أوتو رول مع تحديد الرتبه وتشغيل وتقفيل ومعرفه الرتبه المحدده وغيره بأمر 
 
  تم النشر بواسطة : @ريـبـل بن بآكستآن آل ليمون , 🍋
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('message' , async (message) => {
var prefix = "-"
    if(message.content.startsWith(prefix + "tInv")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 10) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
          message.member.addRole(message.member.guild.roles.find("name",""))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 20) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  الكود مثل م وعدتكم هو توب أنفآيت ضفت عليه أنه وقت يوصل عدد أنفآيت محدد يجيه الرتبه  المحدده 
أي مشكلة توجهه هنآ #deleted-channel 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  https://hastebin.com/ozotutosuh.js
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود لوق ميوت وديفن صوتي وفكهآ 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  client.on('ready',async () => {
setInterval(function(){
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
ReBeeL = currentTime.getMinutes(),
ReBeeeL = currentTime.getSeconds(),
Codes = currentTime.getFullYear(),
CodeS = currentTime.getMonth() + 1,
CoDeS = currentTime.getDate()
if (ReBeeL < 10) {
ReBeeL = "0" + ReBeeL;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
client.channels.find('id', 'أيدي ألروم حق الوقت').setName(`Time - ${hours} : ${ReBeeL} : ${ReBeeeL} ${suffix}`) 
client.channels.find('id', 'أيدي الروم حق التاريخ').setName(`Date : ${Codes} - ${CodeS} - ${CoDeS}`)
}, 1000);
});
  
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
  وصف الكود :
  كود الوقت والتآريخخ أول من ينشره أنآ من صنع يدي كآمل كآن عندي ولكن نشرنآه
جميع الحقوق محفوظهه
تحطه بسيرفرك أذكر المصدر لاهنت + حط أيدي الرومآت في المكآن المخصص 
 
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
https://hastebin.com/hudinupesa.php
بقيه اكواد كودز
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
اكواد كودز القديمه
https://hastebin.com/behovigoya.php

 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
ككل اكواد كودز الزبالين هههههههههههههههه
حقوق الفا كودز على هذا مجلد يا فاشلين كوددز 
والفا كودز بالقمه 
#ALPHA 4 EVER
