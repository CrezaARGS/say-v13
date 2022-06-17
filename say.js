const { MessageEmbed } = require("discord.js");

module.exports = {
    kod: "say",
    async run (client, message, args) {
        let tag = "§" //SUNUCU TAGINIZ
        let tag2 = "Manzelos" //İSİM TAGINIZ, YOKSA SİLİN
        let etikettag = "1955" // ETİKET TAGINIZ, YOKSA SİLİN
        const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;
        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
        
        const creza = new MessageEmbed()
            .setColor("0x800d0d") 
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField("Sunucudaki üye sayısı", message.guild.memberCount)
            .addField("Çevrimiçi üye sayısı", `${çevrimiçi}`)
            .addField("Seslideki üye sayısı", count)
            .addField("Tagdaki üye sayısı", message.guild.members.cache.filter(m => m.user.username.includes(tag)).size)
            .addField("Nick Tagdaki üye sayısı", message.guild.members.cache.filter(m => m.user.username.includes(tag2)).size) 
            .addField("Etiket Tagdaki üye sayısı", message.guild.members.cache.filter(m => m.user.tag.includes(etikettag)).size) 
            .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
        message.channel.send({embeds: [creza]});
    }
}
