
/** Config Template
 *  Will be modified as need be
 *  Compartmentalize for generalization
 * 
 *  ////   RENAME TO config.js    /////
 *  Fill out with you personal API config data
 */

module.exports = {
    public: true,
    fetchDelay: 20000,
    fetchAmount: 3,
    data: {
        APIdomain: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/',
        APIkey: 'keykey',
        user: 'user',
        pass: 'pass',
        twoFactSec: 'sec123'
    },
    parse: {
        sortBy: 'id',
        sort2nd: null,
        display: {
            vars: [
                'id',
                'name',
                'sort',
                'type',
                'info',
                'etc'
            ]
        },
        determineValid: {
            actual: 'price',
            nominal: 'suggested_price'
        }
    },
    action: {
        autoEnable: false,
        userEnable: false
    }
};