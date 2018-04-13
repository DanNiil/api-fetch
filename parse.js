
/** API Data Parser
 *  Generalized JSON Data Parser
 *  Params entered in config.js
 */

const config = require('./config');
const fetch = require('./fetch');

fetch.event.on('fetched', (data) => {
    var out = JSON.parse(data);
    var i = out.length;
    while(i>0) {
        console.log(out[--i]);
    }
});