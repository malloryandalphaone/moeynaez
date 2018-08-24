const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
client.on('ready', () => {
client.user.setStatus('online');
client.user.setActivity("َ",{type: 'PLAYING'});
console.log('I am ready!');
});

client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "صورة-السيرفر"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor("#565656")
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

let stylie;
client.on("ready", async  => {
  let guild = client.guilds.get("462085665371324427"); 
  let users = guild.members.map(member => member.user.id);
  let i;
  stylie=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  stylie++;
}
}
guild.channels.find('id', '482338937923305482').setName(" Online Voice "+stylie+". ");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("462085665371324427");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   stylie++;
guild.channels.find('id', '482338937923305482').setName(" Online Voice "+stylie+". ");
} else if(newUserChannel === undefined){
  stylie--;
guild.channels.find('id', '482338937923305482').setName(" Online Voice "+stylie+". ");
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
    msg.channel.send("```ضع عدد الرسائل التي تريد مسحها```").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
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
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي.**`)


     }
       });

client.on('message' , message => {
    var prefix = "$";
    var args = message.content.split(' ').slice(1).join(' ');
    if(message.content.startsWith(prefix +'8ol3ne')) {
	    
        const planet = message.guild.channels.get('482310304114540556');
        if(!planet) return;
        if(planet) {
            planet.send(args);
        }
    }
});

client.on('message', msg => {

    if (msg.content == '$MallorY') {
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
.setColor('FFFFFF')
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
        .setColor("#f3c98e")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('**You can\'t send links! :broken_heart:**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`**You can't send links! :broken_heart:**`)
    }
}
});

client.on('message', message => {
    if(message.content.includes('youtube')){
                                            if(!message.channel.guild) return message.reply('**You can\'t send links! :broken_heart:**');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`**You can't send links! :broken_heart:**`)
    }
}
});

client.login(process.env.BOT_TOKEN);
