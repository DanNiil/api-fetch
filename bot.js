/** 
 *  Main fetch loop
 * 
 */

const config = require('./config');
const fetch = require('./fetch');

setInterval(makeFetch, config.fetchDelay);

function makeFetch() {
    fetch.fetchData();
};