const Discord = require('discord.js');
const client = new Discord.Client();
const SETTINGS = require('./settings.js');
const latinise = require('./latinise')

let plugins = [];
client.on('ready', () => {
    for(let pluginID in SETTINGS.plugins){
        let pluginDefintion = SETTINGS.plugins[pluginID]
        let plugin = {
            regexs:[],
            pluginDefintion
        };
        function registarRegex(regex,callback,options={}){
            plugin.regexs.push({
                regex,
                callback,
                options,
            })
        }
        require(pluginDefintion.file)({
            settings:pluginDefintion.settings || {},
            registarRegex,
            registarCommand:(command,callback)=>{
                let regex = new RegExp(SETTINGS.commandPrefix+'\!'+command+'((?:\s|.)*)','')
                registarRegex(regex,(message)=>{
                    callback(message,message.content.match(regex)[1])
                })
            },
            plugins:pluginDefintion.privilaged?plugins:undefined,
            client
        });
        plugins.push(plugin);
    }
});
client.on('message', message => {
    for(let plugin of plugins){
        for(let regex of plugin.regexs){
            if(
                (regex.options.includeBots || !message.author.bot) &&
                (
                    regex.regex.test(message.content) ||
                    (regex.options.latinise && regex.regex.test(latinise(message.content)))
                )
            ){
                regex.callback(message)
            }
        }
    }
});
client.login(SETTINGS.token);
client.on('error',(error)=>{
    console.error("client error",error)
})