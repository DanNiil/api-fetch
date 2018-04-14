
/** Config Template
 *  Will be modified as need be
 *  Compartmentalize for generalization
 * 
 *  ////   RENAME TO config.js    /////
 *  Fill out with you personal API config data
 */

module.exports = {
    public: true,                           //boolean for switching public / private API , false will enable injection
    fetchDelay: 20000,                      //delay on recuring fetches in ms , default 20seconds
    fetchAmount: 5,                         //number of posts to be fetched , default 5
    data: {
        APIdomain: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/',   //main domain chunk of API , default is pure win
        APIkey: 'keykey',                   //API key to use in call
        user: 'user',                       //username for logins
        pass: 'pass',                       //password for logins
        twoFactSec: 'sec123',               //twoFactor secret for fetching codes
        keyPos: 'api_key=',                 //API key position identifier
        codePos: 'code=',                   //twofact code position identifier
        APIargs: '?api_key=&code=&per_page='            //api call arguments , end with fetchAmount identifier
    },
    parse: {
        sortBy: 'id',                       //unique identifier of blocks for duplicate checking etc
        sort2nd: null,
        display: {
            vars: [                         //dummy vars
                'id',
                'name',
                'sort',
                'type',
                'info',
                'etc'
            ]
        },
        determineValid: {                   //dummy vars for determining interest / discard
            actual: 'price',
            nominal: 'suggested_price'
        }
    },
    action: {                               //booleans for future possible action automation
        autoEnable: false,
        userEnable: false
    },
    xmodules: {                             //dummy private module strings
        client: 'user',
        market: 'market',
        twoFact: 'twofact',
        site: 'site',
        manager: 'manager'
    }
};