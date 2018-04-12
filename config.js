
/** Config Template
 *  Will be modified as need be
 *  Compartmentalize for generalization
 */

module.exports = {
    public: false,
    fetchDelay: 2000,
    fetchAmount: 500,
    data: {
        APIkey: "http://apikey.com",
        user: "user",
        pass: "pass",
        twoFactSec: "e1e2e3e4e5e6e7e8"
    },
    parse: {
        sortBy: "id",
        sort2nd: null,
        display: {
            vars: [
                "id",
                "name",
                "sort",
                "type",
                "info",
                "etc"
            ]
        },
        determineValid: {
            actual: "price",
            nominal: "suggested_price"
        }
    },
    action: {
        autoEnable: false,
        userEnable: false
    }
};