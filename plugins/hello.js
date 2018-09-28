const trivialdb = require('trivialdb');
const data18iNS = trivialdb.ns('data18i');
const helloDB = data18iNS.db('hello');
let message = "Hey I am Data18I bot. I live in the cloud floating around on my docker whale guided by kubernetes. If you're weird you can look inside me here https://github.com/0m-ax/data18i (pls dont it hurts)";
module.exports = async function ({client}){
    client.on('guildCreate',(guild)=>{
        guild.defaultChannel.send(message)
    })
    for(let guild of client.guilds){
        if(!await helloDB.load(guild.id,false)){
            await helloDB.save(guild.id,true)
            guild.defaultChannel.send(message)
        }
    }
}