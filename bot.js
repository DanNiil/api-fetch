
/** 
 *  Main fetch loop
 */

const config = require('./config');
const fetch = require('./fetch');
const parse = require('./parse');

const loop = setInterval(makeFetch, config.fetchDelay);
const API = config.data.APIdomain+
            config.fetchAmount;

function makeFetch() {
    fetch.event.emit('fetchData', API);
};

fetch.event.on('error', (err) => {
    clearInterval(loop);
    console.log('Bot stopped, fetch error: ', err);
});