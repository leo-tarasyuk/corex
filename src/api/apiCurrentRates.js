import { SERVER_URL } from '../config';
import axios from 'axios';

export const client = axios.create({
	baseURL: SERVER_URL,
});

class apiCurrentRates {
    static getCurrentRates() {
        return client.get();
    }
}

export default apiCurrentRates;
