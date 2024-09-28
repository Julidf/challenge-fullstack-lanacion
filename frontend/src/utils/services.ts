import axios from 'axios';
import { CardProps } from './types';

const API_URL: string = "http://localhost:8000";
const TOURISM_ENDPOINT: string = "/api/tourism"
const DISCOUNT_CODES: string = "/api/discount-codes"

interface GetCardDataResponse {
    data: CardProps[];
    total: number;
}

interface GetCardDataProps {
    offset?: number;
    id: string;
}

export const getCardData = async ({ offset, id }: GetCardDataProps) => {
    let URL = API_URL

    if (id === 'tourism') {
        URL += `${TOURISM_ENDPOINT}`;
    } else if (id === 'discount-codes') {
        URL += `${DISCOUNT_CODES}`;
    }

    if (offset) URL += `?offset=${offset}`;

    try {
        const response = await axios.get<GetCardDataResponse>(URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
};

