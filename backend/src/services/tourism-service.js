const accounts = require('../../data/accounts.json');
const LA_NACION_URL = require('../utils/constants').LA_NACION_URL;

const filterAccountsByTags = (tags) => {
    return accounts.accounts.filter(account => {
        return account.tags.some(tag => tag.name === tags);
    });
};

//Processes an array of accounts by calculating the closest branch location for each account and then sorting the accounts based on that location
const sortAccountsByLocation = (accounts) => {
    return accounts.map(account => {
        account.closestLocation = Math.min(...account.branches.map(branch => branch.location));
        return account;
    }).sort((a, b) => a.closestLocation - b.closestLocation);
};

//TO DO
const calculateBenefits = (account) => {
    const benefits = {
        Classic: "10%",
        Premium: "15%",
        Black: "20%",
    };
    return benefits
};

const formatAccountResponse = (accounts) => {
    return accounts.map(account => {
        return {
            name: account.name,
            image: account.images[0]?.url || null,
            url: `${LA_NACION_URL}${account.crmid}`,
            benefits: calculateBenefits(account),
            closestLocation: Math.min(...account.branches.map(branch => branch.location))
        };
    });
};

module.exports = {
    filterAccountsByTags,
    sortAccountsByLocation,
    calculateBenefits,
    formatAccountResponse
};
