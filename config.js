
/** Config Template
 *  Will be modified as need be
 *  Compartmentalize for generalization
 */

module.exports = {
    public: true,
    fetchDelay: 20000,
    fetchAmount: 500,
    data: {
        APIdomain: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/2',
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