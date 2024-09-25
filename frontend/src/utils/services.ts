import axios from 'axios';

const API_URL: string = "http://localhost:8000";
const TOURISM_ENDPOINT: string = "/api/tourism"
const DISCOUNT_CODES: string = "/api/discount-codes"


export const getCardData = async ({ lastIndex, id }: { lastIndex?: number, id: string }) => {
    let URL = API_URL

    if (id === 'tourism') {
        URL += `${TOURISM_ENDPOINT}`;
    } else if (id === 'discount-codes') {
        URL += `${DISCOUNT_CODES}`;
    }

    if (lastIndex) URL += `&lastIndex=${lastIndex}`;

    try {
        const response = await axios.get(URL);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
};

