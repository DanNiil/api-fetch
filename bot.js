/** 
 *  Main fetch loop
 * 
 */

const config = require('./config');
const fetch = require('./fetch');

var loop = setInterval(makeFetch, config.fetchDelay);

function makeFetch() {
    fetch.fetchData();
};

fetch.on('error', (err) => {
    clearInterval(loop);
    console.log('Bot stopped, fetch error: ', err);
});

//Testing emit and listen - works.
fetch.on('test', (data) => {
    clearInterval(loop);
    var i = JSON.parse(data).length;
    console.log('Test error: ',i);
});