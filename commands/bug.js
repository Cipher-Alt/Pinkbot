const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

    let bug = args.join(" ")

    let bugEmbed = new Discord.RichEmbed()
    .setTitle("Bug Report")
    .setColor("#ff0aeb")
    .addField("Bug Description", bug)
    .addField("Reported By:", `${message.author} with ID ${message.author.id}`)
    .addField("Channel:", message.channel)
    .addField("Time", message.createdAt);

    let bugChannel = message.guild.channels.find(x => x.name === "bugreports");
    if(!bugChannel) return message.reply("Couldn't find channel called bugreports")

    message.delete().catch(O_o=>{});
    bugChannel.send(bugEmbed);
}

module.exports.help = {
    name: "bug"
}