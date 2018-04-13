/** 
 *  Main fetch loop
 * 
 */

const config = require('./config');
const Fetch = require('./fetch');
const fetch = new Fetch;

setInterval(makeFetch, config.fetchDelay);

function makeFetch() {
    fetch.fetchData();
};