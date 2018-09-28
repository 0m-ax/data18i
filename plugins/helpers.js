module.exports = function ({settings,registarRegex,client,plugins}){
    registarRegex(/\!helperCurrentChannel/i,(message)=>{
        message.reply(message.channel.id)
    })
}