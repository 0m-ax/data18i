const { Attachment } = require('discord.js');
const fetch = require('node-fetch')
const {VM} = require('vm2');
const lolcode = require('lolcode/parser')
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
    // registarRegex(/\+cow/i,async (message)=>{
    //     const attachment = new Attachment('https://source.unsplash.com/random/?cow');        
    //     message.channel.send(attachment);
    // })
    registarRegex(/w\s*a\s*t\s*e\s*r\s*f\s*a(\s*l|i){2}/i,function(message){
        const attachment = new Attachment('https://media.discordapp.net/attachments/486433511335657475/498747267755540480/unknown.png');
        message.reply(attachment)
    },{latinise:true});
    registarRegex(/```LOLCODE\n([^`]+)\n```(?:\n```\n([^`]+)\n```)?/,function  (message,things){
        console.log('arguments',things[1])
        let inputStack = things[2]?things[2].split("\n"):[];
        const vm = new VM({
            timeout: 1000,
            sandbox: {
                prompt:function(ask){
                    let resp = inputStack.shift()
                    message.reply("LOLZ IN:"+ask+": "+resp )
                    return resp;
                },
                console:{
                    log:function(value){
                        message.reply("LOLZ OUT:"+value)
                    }
                }
            }
        });
        let output = lolcode(things[1],function(error, warn, js_out){
            if(warn){
                message.reply("LOLZ WARN:"+warn)
            }
            if(error){
                message.reply("LOLZ ERROR:"+error)
            }
            if(js_out){
                vm.run(js_out)
            }
        });
       
    })
}
