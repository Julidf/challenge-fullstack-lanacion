import * as discountCodesService from '../services/discount-codes-service.js';

const getDiscountCodesAccounts = async (req, res) => {
    try {        
        let { offset = 0 } = req.query;
        const haveVoucher = true;
        const limit = 4;

        let filteredAccounts = discountCodesService.filterAccountsByVoucher(haveVoucher);
    
        if (filteredAccounts.length === 0) {
            return res.status(404).json({ error: 'No accounts found.' });
        }
    
        const sortedAccounts = discountCodesService.sortAccountsByName(filteredAccounts);
    
        const totalAccounts = sortedAccounts.length;
    
        const accountsSliced = sortedAccounts.slice(offset, offset + limit);
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

export default { getDiscountCodesAccounts };