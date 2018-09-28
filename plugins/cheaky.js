const { Attachment } = require('discord.js');

module.exports = function ({settings,registarRegex,client,plugins,registarCommand}){
    registarRegex(/\ud83c\udf46/i,(message)=>{
        message.reply(':wink:')
    })
    registarRegex(/\ud83e\udd84/i,(message)=>{
        message.reply(':heart: :large_orange_diamond:  :yellow_heart: :green_heart: :blue_heart: :purple_heart:')
    })
    registarRegex(/elon musk/i,(message)=>{
        // Create the attachment using Attachment
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/486433511335657475/493715312911450112/unknown.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    })
}
