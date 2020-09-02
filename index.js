const Discord = require('discord.js');
//this may get your account banned
const client = new Discord.Client();  
 

 


client.on("ready", function() { 
        client.user.setActivity("swag") 
    console.log("Im up up!"); 
});
 
client.on("message", (message) => {  
  
        if(message.content.startsWith( "hi")){
        message.channel.send("H i  !");
        }
        
client.login("NzQyMDA4NDk2NzkwMTc1Nzk0.Xy_3Qw.EboDuyzQXKNt1HgI4EoqXDRzaNg");
