const accounts = require('../../data/accounts.json');
const LA_NACION_URL = require('../utils/constants').LA_NACION_URL;

const filterAccountsByVoucher = (haveVoucher) => {
    return accounts.accounts.filter(account => {
        return account.haveVoucher === haveVoucher;
    });
};

const sortAccountsByName = (accounts) => {
    return accounts.sort((a, b) => b.name.localeCompare(a.name));
};

const formatAccountResponse = (accounts) => {
    return accounts.map(account => {
        return {
            name: account.name,
            image: account.images[0]?.url || null,
            url: `${LA_NACION_URL}${account.crmid}`,
        };
    });
};

module.exports = {
    filterAccountsByVoucher,
    sortAccountsByName,
    formatAccountResponse
};
