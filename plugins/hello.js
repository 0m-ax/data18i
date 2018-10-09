const trivialdb = require('trivialdb');
const data18iNS = trivialdb.ns('data18i');
const helloDB = data18iNS.db('hello');
let message = "Hey I am Data18I bot. I live in the cloud floating around on my docker whale guided by kubernetes. If you're weird you can look inside me here https://github.com/0m-ax/data18i (pls dont it hurts)";
module.exports = async function ({client}){
    client.on('guildCreate',async (guild)=>{
        await sendTo(guild)
    })
    for(let guild of client.guilds){
        guild = guild[1];
        await sendTo(guild)
    }
}
async function sendTo(guild){
    return;
    try {
        let hasSent = await helloDB.load(guild.id,false)
        console.log(guild.id,hasSent)
        if(!hasSent){
            await helloDB.save(guild.id,true);
            let dc = await getDefaultChannel(guild);
            if(dc){
                dc.send(message)
            }
        }        
    } catch (error) {
        console.log("failed to send",error)
    }
}
async function getDefaultChannel(guild) {
    // get "original" default channel
    if(guild.channels.has(guild.id))
      return guild.channels.get(guild.id)
   
    // Check for a "general" channel, which is often default chat
    if(guild.channels.exists("name", "general"))
      return guild.channels.find("name", "general");
}
   