module.exports = function ({settings,registarRegex,client,plugins}){
    registarRegex(/./i,(message)=>{
        console.log(unicodeEscape(message.content))
    })
}
function unicodeEscape(str) {
    return str.replace(/[\s\S]/g, function (escape) {
      return '\\u' + ('0000' + escape.charCodeAt().toString(16)).slice(-4);
    });
  }