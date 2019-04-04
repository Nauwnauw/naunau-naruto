const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Fais *help pour avoir la liste des commandes");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
            message.channel.sendMessage("Voici la liste des commandes : \n  -*help");
    }

    if(message.content === "Salut"){
        message.reply(" Hey !");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "fabriquer"){
        message.reply("Ce bot a été crée par **Naunau**");
        console.log("commande fabriquant effectué");
    }
});
