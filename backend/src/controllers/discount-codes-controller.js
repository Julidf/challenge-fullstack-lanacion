const discountCodesService = require('../services/discount-codes-service');

exports.getDiscountCodesAccounts = async (req, res) => {
    try {        
        let { lastIndex = 0 } = req.query;
        const haveVoucher = true;
        const limit = 4;

        let filteredAccounts = discountCodesService.filterAccountsByVoucher(haveVoucher);
    
        if (filteredAccounts.length === 0) {
            return res.status(404).json({ error: 'No accounts found.' });
        }
    
        const sortedAccounts = discountCodesService.sortAccountsByName(filteredAccounts);
    
        const totalAccounts = sortedAccounts.length;
    
        const accountsSliced = sortedAccounts.slice(lastIndex, lastIndex + limit);
        const accountsToReturn = discountCodesService.formatAccountResponse(accountsSliced);
    
        const response = {
            data: accountsToReturn,
            total: totalAccounts
        };
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching tourism accounts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
