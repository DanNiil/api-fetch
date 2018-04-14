
/** API Data Parser
 *  Generalized JSON Data Parser
 *  Params entered in config.js
 */

const config = require('./config');
const fetch = require('./fetch');

fetch.event.on('fetched', (data) => {
    var out = 
    JSON.parse(data).forEach( (entry) => {
        console.log(entry)
    });
});