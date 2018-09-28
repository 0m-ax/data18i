module.exports = function ({settings,registarRegex,client}){
    registarRegex(/marco/gi,(message)=>{
        message.reply("Polo")
    })
}