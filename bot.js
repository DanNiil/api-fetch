
/** 
 *  Main BOT logic and loop
 */

const config = require('./config');
const fetch = require('./fetch');
const parse = require('./parse');
const notp = require('notp');
const base32 = require('thirty-two');

const twoFactCode = (secret) => {
    //generates time based 2fact code, TOTP
    return notp.totp.gen(base32.decode(secret));
};

const injectAPI = (domain) => {
    var finalD = domain;
    if(!config.public) {
        //appends API arguments
        finalD += config.data.APIargs;
        //injects API key in API key pos
        var keyPos = finalD.search(config.data.keyPos)+config.data.keyPos.length;
        finalD = finalD.slice(0,keyPos) + config.data.APIkey + finalD.slice(keyPos,finalD.length);
        //injects twoFact code in code pos
        if(config.data.codePos != null) {
            var codePos = finalD.search(config.data.codePos)+config.data.codePos.length;
            finalD = finalD.slice(0,codePos) + twoFactCode(config.data.twoFactSec) + finalD.slice(codePos,finalD.length);
        }
    }
    return finalD+config.fetchAmount;
};

const loop = setInterval( () => {
    var API = injectAPI(config.data.APIdomain);
    fetch.event.emit('fetchData', API);
    } ,
    config.fetchDelay
);

fetch.event.on('error', (err) => {
    clearInterval(loop);
    console.log('Bot stopped, ERROR: ', err);
});