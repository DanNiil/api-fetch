
/** 
 *  Main BOT logic and loop
 */

const config = require('./config');
const fetch = require('./fetch');
const parse = require('./parse');

var twoFactCode = (secret) => {
    //not implemented
    return secret;
};

var injectAPI = (domain) => {
    var finalD = domain;
    if(!config.public) {
        finalD += config.data.APIargs;
        //injects API key in API key pos
        var keyPos = finalD.search(config.data.keyPos)+config.data.keyPos.length;
        finalD = finalD.slice(0,keyPos) + config.data.APIkey + finalD.slice(keyPos,finalD.length);
        //injects twoFact code in code pos
        var codePos = finalD.search(config.data.codePos)+config.data.codePos.length;
        finalD = finalD.slice(0,codePos) + twoFactCode(config.data.twoFactSec) + finalD.slice(codePos,finalD.length);
    }
    return finalD+config.fetchAmount;
};

const API = injectAPI(config.data.APIdomain);

const loop = setInterval( () => {
    fetch.event.emit('fetchData', API);
    } ,
    config.fetchDelay
);

fetch.event.on('error', (err) => {
    clearInterval(loop);
    console.log('Bot stopped, fetch error: ', err);
});