
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
            res.on('data', (data) => {
                event.emit('fetched', data);
        });
    });

    getReq.end();
    getReq.on('error', (err) => {
        event.emit('error', err);
    }); 
});

module.exports = {
    event
};