
/** API Data Fetcher
 *  Generalized JSON Data Fetcher
 *  Params entered in config.js
 */

const https = require('https');
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('fetchData', (API) => {
    var getReq =  
        https.get(API, (res) => {
            let data = [];
            res.on('error', (err) => {
                event.emit('error', err);
            }).on('data', (chunk) => {
                data.push(chunk);
            }).on('end', () => {
                data = Buffer.concat(data).toString();
                event.emit('fetched', data);
            });
        })
    getReq.end();
});

module.exports = {
    event
};