
/** API Data Fetcher
 *  Generalized JSON Data Fetcher
 *  Params entered in config.js
 */

module.exports = {fetchData};

const config = require('./config');
const https = require('https');

function fetchData() {
    var getReq =  
        https.get(config.data.APIdomain+config.fetchAmount, (res) => {
            res.on('data', (data) => {

            //Will be sent to Parser, logging for testing
            var out = JSON.parse(data);
            var i = out.length;
            while(i>0) {
                console.log(out[--i])
            }
        });
    });

    getReq.end();
    getReq.on('error', (err) => {
        console.log("Error: ", err);
    }); 
};