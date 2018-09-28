const Discord = require('discord.js');
const client = new Discord.Client();
const SETTINGS = require('./settings.json');
client.on('ready', () => {
    for (let chanel of client.channels) {
        chanel = chanel[1]
        console.log(chanel.id, chanel.name)
    }
});
client.login(SETTINGS.token);