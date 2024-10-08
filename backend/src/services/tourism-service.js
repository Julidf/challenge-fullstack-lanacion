import accounts from '../../data/accounts.json' assert { type: "json" };
import { LA_NACION_URL } from '../utils/constants.js';

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
const calculateBenefit = (account) => {
    // const benefits = {
    //     Classic: calculateHigherBenefit(account, "Classic"),
    //     Premium: calculateHigherBenefit(account, "Premium"),
    //     Black: calculateHigherBenefit(account, "Black"),
    // };
    const benefits = {
        Classic: "10%",
        Premium: "15%",
        Black: "20%",
    };
    return benefits
};

const calculateHigherBenefit = (account, program_name) => {
    if (account.benefits?.find(benefit => benefit.program_name[0].includes(program_name))) {
        const benefitsTypeArray = account.benefits.map(benefit => parseFloat(benefit.type))
        const higherBenefit = Math.max(...benefitsTypeArray);
        return higherBenefit.toString().concat("%")
    } else {
        return null;
    }
}

const formatAccountResponse = (accounts) => {
    return accounts.map(account => {
        return {
            name: account.name,
            image: account.images[0]?.url || null,
            url: `${LA_NACION_URL}${account.crmid}`,
            benefits: calculateBenefit(account),
            closestLocation: Math.min(...account.branches.map(branch => branch.location))
        };
    });
};

export { filterAccountsByTags, sortAccountsByLocation, calculateBenefit, formatAccountResponse };
