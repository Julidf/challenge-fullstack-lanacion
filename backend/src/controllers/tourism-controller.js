import * as tourismService from '../services/tourism-service.js';

const getTourismAccounts = async (req, res) => {
    try {        
        let { offset = 0 } = req.query;
        const tags = "Turismo en Buenos Aires"
        const limit = 4;
    
        let filteredAccounts = tourismService.filterAccountsByTags(tags);
    
        if (filteredAccounts.length === 0) {
            return res.status(404).json({ error: 'No accounts found for the specified tags.' });
        }
    
        const sortedAccounts = tourismService.sortAccountsByLocation(filteredAccounts);
    
        const totalAccounts = sortedAccounts.length;
    
        const accountsSliced = sortedAccounts.slice(offset, offset + limit);

        const accountsToReturn = tourismService.formatAccountResponse(accountsSliced);
    
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

export default { getTourismAccounts } ;
