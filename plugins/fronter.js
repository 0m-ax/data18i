let Parser = require('rss-parser');
const trivialdb = require('trivialdb');
const data18iNS = trivialdb.ns('data18i');
const fronterDB = data18iNS.db('fronter');

module.exports = function ({settings,client}){
    let parser = new Parser({
        headers:{
            "Authorization":"Basic " + settings.header
        }
    });
    setInterval(async function (){
        try {
            let feed = await parser.parseURL(settings.url);        
            let items = feed.items.map(({creator,title,link,pubDate,guid})=>{
                return {
                    creator,
                    title,
                    link,
                    guid,
                    pubDate:pubDate?new Date(pubDate):null
                }
            }).filter(({pubDate})=>pubDate).sort((a,b)=>{
                return a.pubDate-b.pubDate;
            })
            let lastID = await fronterDB.load('lastID','')
            let itemIndex = items.findIndex(({guid})=>{
                return guid == lastID
            })
            items.splice(0,itemIndex+1)
            if(items.length > 0){
                console.log("new lastID"+items[items.length-1].guid)
                let lastID = await fronterDB.save('lastID',items[items.length-1].guid)
            }
            for(let item of items){
                let message = `New item on fronter "${item.title}" By "${item.creator}" ${item.link}`
                console.log(message)
                client.channels.get(settings.channel).send(message)
            }
    
        } catch (error) {
        }
    },settings.updateTime*60*1000)
}