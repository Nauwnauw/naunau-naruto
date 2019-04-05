const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Fais *help pour avoir la liste des commandes");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on("message", (message) => {
    if (message.content.startsWith("*kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " a bien été kick :wink: :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Tu ne peux pas faire ceci");
        });
    }
});

bot.on('message', message => {
    if (message.content === prefix + "help"){
            message.channel.sendMessage("``` Voici la liste des commandes : \n  -*help \n  -Salut ( sans prefix ) \n  -*Naruto 1.0  -*fabriquer```");
    }

    if(message.content === "Salut"){
        message.reply(" Hey !");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "fabriquer"){
        message.reply("Ce bot a été crée par **Naunau**");
        console.log("commande fabriquant effectué");
    }

    if (message.content === prefix + "Naruto 1.0"){
        var embed = new Discord.RichEmbed()
            .setTitle("ElNaruto")
            .setDescription("On m'a dit que tu voulais voir une image de Naruto")
            .addField("Regardez cette image magnifique ! (http://s2.noelshack.com/old/up/narutoclaire-fb7eba9440.jpg", true)
            .setColor("0xFB7F04")
            .setFooter("Cela vous a plus ? x)")
        message.channel.sendEmbed(embed);
    }
});
