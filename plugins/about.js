module.exports = function ({settings,registarRegex,client,plugins,registarCommand}){
    registarCommand('dataPlugins',(message)=>{
        message.reply(`I have ${plugins.length} loaded.`)
        for(let plugin of plugins){
            let output = "";
            output += `Plugin:"${plugin.pluginDefintion.name}" - "${plugin.pluginDefintion.about}"\n`;
            if(plugin.regexs.length > 0){
                output += `=====================\n`;
                output += `Registared Regexs\n`;
                for(let regex of plugin.regexs){
                    output += `${regex.regex.toString()}\n`;
                }
            }
            message.reply(output)
        }
    })
}