
/** API Data Fetcher
 *  Generalized JSON Data Fetcher
 *  Params entered in config.js
 */

const config = require('./config');
const https = require('https');
const EventEmitter = require( 'events' );

class Fetch extends EventEmitter {
    Fetch() { this.super() }
    fetchData() {
        var getReq =  
            https.get(config.data.APIdomain+config.fetchAmount, (res) => {
                res.on('data', (data) => {
    
                //Will be sent to Parser, logging for testing
                var out = JSON.parse(data);
                var i = out.length;
                while(i>0) {
                    console.log(out[--i])
                }
                this.emit('data', data);
                //Testing emit signaling
                this.emit('test', data)
            });
        });
    
        getReq.end();
        getReq.on('error', (err) => {
            this.emit('error', err)
            console.log("Error: ", err);
        }); 
    };
}

const fetch = new Fetch();
module.exports = fetch;