const trivialdb = require('trivialdb');
const data18iNS = trivialdb.ns('data18i');
const helloDB = data18iNS.db('hello');
module.exports = function ({client}){
    client.on('guildCreate',(guild)=>{
        guild.defaultChannel.send("Hey I am Data18I bot. I live in the cloud floating around on my docker whale guided by kubernetes. If you're weird you can look inside me here https://github.com/0m-ax/data18i (pls dont it hurts)")
    })
}