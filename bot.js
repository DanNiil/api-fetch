
/** 
 *  Main fetch loop
 */

const config = require('./config');
const fetch = require('./fetch');
const parse = require('./parse');

const API = config.data.APIdomain+
            config.fetchAmount;

const loop = setInterval( () => {
    fetch.event.emit('fetchData', API);
    } ,
    config.fetchDelay
);

fetch.event.on('error', (err) => {
    clearInterval(loop);
    console.log('Bot stopped, fetch error: ', err);
});