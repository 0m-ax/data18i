const { Attachment } = require('discord.js');

module.exports = function ({settings,registarRegex,client,plugins,registarCommand}){
    registarRegex(/\ud83c\udf46/i,(message)=>{
        message.reply(':wink:')
    })
    registarRegex(/\ud83e\udd84/i,(message)=>{
        message.reply(':heart: :large_orange_diamond:  :yellow_heart: :green_heart: :blue_heart: :purple_heart:')
    })
    registarRegex(/\ud83d\udc33/i,(message)=>{
        const attachment = new Attachment('https://developers.redhat.com/blog/wp-content/uploads/2015/01/docker-whale-home-logo.png');
        message.reply(attachment)
    })
    registarRegex(/\ud83d\udc0b/i,(message)=>{
        const attachment = new Attachment('https://developers.redhat.com/blog/wp-content/uploads/2015/01/docker-whale-home-logo.png');
        message.reply(attachment)
    })
    registarRegex(/elon musk/i,(message)=>{
        // Create the attachment using Attachment
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/486433511335657475/493715312911450112/unknown.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    })
    registarRegex(/\+cat/i,(message)=>{
        message.reply('+dog')
    })
    function waterfall(message){
        const attachment = new Attachment('https://media.discordapp.net/attachments/486433511335657475/498747267755540480/unknown.png');
        message.reply(attachment)
    }
    registarRegex(/w\s*a\s*t\s*e\s*r\s*f\s*a\s*l\s*l/i,waterfall)
}