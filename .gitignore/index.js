const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Fais *help pour avoir la liste des commandes");
    console.log("Connecté");
});

bot.login('');


bot.on('message', message => {
    if (message.content === prefix + "Naunau"){
        message.channel.sendMessage("Naunau il est **TROP** beau pas vrai ?")
    }})

bot.on('message', message => {
    if (message.content === prefix + "Compte De Naunau")
    message.channel.sendMessage("```Voici ses identifiants : _Naunau_#6954```")
})

bot.on('message', message => {
    if (message.content === prefix + "fabriquer")
    message.channel.sendMessage("Ce bot a été fait par le valereux Naunau !")
})

bot.on('message', message => {
    if (message.content === prefix + "Numéro De Téléphone")
    message.channel.sendMessage("07 69 68 ..... Bonne Chance pour trouver les 2 derniers ! :wink: ")
})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Voici les commandes de ce bot :")
            .addField("Information :\n```fabriquer \nNaunau \nCompte De Naunau \nNuméro De Téléphone ```")
            .setColor("0xFF8000")
            .setFooter("Naunau")
        message.channel.sendEmbed(embed);
    }})

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "général").send(`Bienvenue ${member}! J'espère que tu t'ammuseras sur ce serveur !`)
})
        
bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "général").send("Aurevoir ${member}! J'espère que tu t'es ammusé sur le serveur !" )
})
