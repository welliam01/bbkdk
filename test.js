const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'P';



bot.on("message", (message) => {     
  if (message.author.bot) return;
    if (message.author.id === bot.user.id) return;
	if(!message.channel.guild) return;      
      if (message.content.includes('r.agar.io')){
	  if(!message.channel.guild) return;
	  const kparty =  message.guild.channels.find('name', "party");
	   if(!kparty)return;
        message.delete()
		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);
       const paarty = new Discord.RichEmbed()
	    .setAuthor(message.author.username, message.author.avatarURL)
.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)
.setColor("RANDOM")
        .setFooter('Party Bot')
kparty.sendEmbed(paarty);   

};
});

bot.on('ready', function(){
    bot.user.setStatus("dnd");
    var ms = 10000 ;
    var setGame = [`${prefix}help`,`${prefix}مساعدة`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        bot.user.setGame(setGame[i],`https://www.twitch.tv/osama_gmt`);
    }, ms);10000

});

bot.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#00014a")
         .setDescription(`**
:sparkles: تعريف البوت  :sparkles:
البوت مخصص لسيرفرات اقاريو مبدأ عمله بسيط و هو اذا قام اي شخص بارسال بارتي في اي شات عدا الشات المخصص سيقوم البوت
 بنسخ البارتي و حذفها و ارسالها مجددا الى شات البارتي مع اسم الشات التي ارسلت بها واسم و صورة العضو الذي قام بارسالها
:comet: | طريقة الاستخدام
و سيقوم البوت  بعمله تلقائيا  party كل ما عليك هو اضافة شات جديدة باسم 
\`MANAGE_MASSEGE\` البوت لازم تكون عنده خاصية   
 **`)
   message.author.sendEmbed(embed)
   
   }
   }); 
   
   bot.on("message", message => {
    if (message.content === (prefix + "مساعدة")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#00014a")
         .setDescription(`**
:sparkles: تعريف البوت  :sparkles:
البوت مخصص لسيرفرات اقاريو مبدأ عمله بسيط و هو اذا قام اي شخص بارسال بارتي في اي شات عدا الشات المخصص سيقوم البوت
 بنسخ البارتي و حذفها و ارسالها مجددا الى شات البارتي مع اسم الشات التي ارسلت بها واسم و صورة العضو الذي قام بارسالها
:comet: | طريقة الاستخدام
و سيقوم البوت  بعمله تلقائيا  party كل ما عليك هو اضافة شات جديدة باسم 
\`MANAGE_MASSEGE\` البوت لازم تكون عنده خاصية 
 **`)
   message.author.sendEmbed(embed)
   
   }
   }); 
   

bot.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#00014a")
         .setDescription(`**
**
╭━━━╮╱╱╱╱╭╮
┃╭━╮┃╱╱╱╭╯╰╮
┃╰━╯┣━━┳┻╮╭╋╮╱╭╮
┃╭━━┫╭╮┃╭┫┃┃┃╱┃┃
┃┃╱╱┃╭╮┃┃┃╰┫╰━╯┃
╰╯╱╱╰╯╰┻╯╰━┻━╮╭╯
╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╱╱╰━━╯
**
『${prefix}invite/لدعوة البوت』
『${prefix}ping/لرئية سرعة البوت』
『${prefix}لدعوة البوت/دعوة』
 **`)
   message.author.sendEmbed(embed)
   
   }
   }); 
   
bot.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + "ping")) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(bot.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
 });
 
 bot.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** :white_check_mark: Servers: **" , bot.guilds.size)
  .addField("** :white_check_mark: Users: **" , bot.users.size)
  .addField("** :white_check_mark: Channels: **" , bot.channels.size)
    .addField("** :rocket: Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});


bot.on('message' , message => {
    if (message.content === (prefix + "invite")) {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(bot.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('Click Here To Invite The Bot')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=453898103901257748&scope=bot&permissions=178193')
  message.channel.sendEmbed(embed);
   }
});


bot.on('message' , message => {
    if (message.content === (prefix + "دعوة")) {
        if(!message.channel.guild) return message.reply('هادا الامر لسرفرات فقط');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(bot.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle('اضغط هنا لدعوة البوت')
 .setURL('https://discordapp.com/oauth2/authorize?client_id=453898103901257748&scope=bot&permissions=178193')
  message.channel.sendEmbed(embed);
   }
});
bot.on("message", (message) => {     
  if (message.author.bot) return;
    if (message.author.id === bot.user.id) return;
	if(!message.channel.guild) return;      
      if (message.content.includes('r.agar.io')){
	  if(!message.channel.guild) return;
	  const kparty =  message.guild.channels.find('name', "✺party✺");
	   if(!kparty)return;
        message.delete()
		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);
       const paarty = new Discord.RichEmbed()
	    .setAuthor(message.author.username, message.author.avatarURL)
.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)
.setColor("RANDOM")
        .setFooter('Party Bot')
kparty.sendEmbed(paarty);   

};
});
bot.on("message", (message) => {     

  if (message.author.bot) return;

    if (message.author.id === bot.user.id) return;

	if(!message.channel.guild) return;            if (message.content.includes('r.agar.io')){

	  if(!message.channel.guild) return;

	  const kparty =  message.guild.channels.find('name', "Party");

	   if(!kparty)return;

        message.delete()

		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);

       const paarty = new Discord.RichEmbed()

	    .setAuthor(message.author.username, message.author.avatarURL)

.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)

.setColor("RANDOM")

        .setFooter('Party Bot')

kparty.sendEmbed(paarty);   

};

});

bot.on("message", (message) => {     

  if (message.author.bot) return;

    if (message.author.id === bot.user.id) return;

	if(!message.channel.guild) return;            if (message.content.includes('r.agar.io')){

	  if(!message.channel.guild) return;

	  const kparty =  message.guild.channels.find('name', "✺Party✺");

	   if(!kparty)return;

        message.delete()

		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);

       const paarty = new Discord.RichEmbed()

	    .setAuthor(message.author.username, message.author.avatarURL)

.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)

.setColor("RANDOM")

        .setFooter('Party Bot')

kparty.sendEmbed(paarty);   

};

});
bot.on("message", (message) => {     

  if (message.author.bot) return;

    if (message.author.id === bot.user.id) return;

	if(!message.channel.guild) return;            if (message.content.includes('r.agar.io')){

	  if(!message.channel.guild) return;

	  const kparty =  message.guild.channels.find('name', "PARTY");

	   if(!kparty)return;

        message.delete()

		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);

       const paarty = new Discord.RichEmbed()

	    .setAuthor(message.author.username, message.author.avatarURL)

.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)

.setColor("RANDOM")

        .setFooter('Party Bot')

kparty.sendEmbed(paarty);   

};

});
bot.on("message", (message) => {     

  if (message.author.bot) return;

    if (message.author.id === bot.user.id) return;

	if(!message.channel.guild) return;            if (message.content.includes('r.agar.io')){

	  if(!message.channel.guild) return;

	  const kparty =  message.guild.channels.find('name', "✺PARTY✺");

	   if(!kparty)return;

        message.delete()

		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);

       const paarty = new Discord.RichEmbed()

	    .setAuthor(message.author.username, message.author.avatarURL)

.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)

.setColor("RANDOM")

        .setFooter('Party Bot')

kparty.sendEmbed(paarty);   

};

});

bot.on("message", (message) => {     

  if (message.author.bot) return;

    if (message.author.id === bot.user.id) return;

	if(!message.channel.guild) return;            if (message.content.includes('r.agar.io')){

	  if(!message.channel.guild) return;

	  const kparty =  message.guild.channels.find('name', "البارتي");

	   if(!kparty)return;

        message.delete()

		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);

       const paarty = new Discord.RichEmbed()

	    .setAuthor(message.author.username, message.author.avatarURL)

.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)

.setColor("RANDOM")

        .setFooter('Party Bot')

kparty.sendEmbed(paarty);   

};

});


bot.on("message", (message) => {     

  if (message.author.bot) return;

    if (message.author.id === bot.user.id) return;

	if(!message.channel.guild) return;            if (message.content.includes('r.agar.io')){

	  if(!message.channel.guild) return;

	  const kparty =  message.guild.channels.find('name', "شات-البارتي");

	   if(!kparty)return;

        message.delete()

		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);

       const paarty = new Discord.RichEmbed()

	    .setAuthor(message.author.username, message.author.avatarURL)

.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)

.setColor("RANDOM")

        .setFooter('Party Bot')

kparty.sendEmbed(paarty);   

};

});

bot.on("message", (message) => {     

  if (message.author.bot) return;

    if (message.author.id === bot.user.id) return;

	if(!message.channel.guild) return;            if (message.content.includes('r.agar.io')){

	  if(!message.channel.guild) return;

	  const kparty =  message.guild.channels.find('name', "شّْاٍّتُّ↭اٍّلَّبّْاٍّرًّتُّي⇍🎮");

	   if(!kparty)return;

        message.delete()

		message.reply('تم ارسال البارتي في شات البارتي').then(msg => (msg.delete(6500))).catch(console.error);

       const paarty = new Discord.RichEmbed()

	    .setAuthor(message.author.username, message.author.avatarURL)

.setDescription( `<@${message.author.id}>`+'تم ارسال البارتي من قبل '+`\n` +`${message}`)

.setColor("RANDOM")

        .setFooter('Party Bot')

kparty.sendEmbed(paarty);   

};

});





bot.login(process.env.BOT_TOKEN);
