const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR"))return message.reply("You do not have permission to run this command!")
    message.react("👍")
    message.react("👎")
    message.react("🤷")
}

module.exports.help = {
    name: "poll"
}