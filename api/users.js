import axios from 'axios';
import { BASE_URL } from '@env'

const login = async (email, password) => {
    const url = `${BASE_URL}/users/login`
    console.log(BASE_URL);
    let response;
    try {
        response = await axios.post(url, { email, password });
    } catch (error) {
        throw error;
    }

    return response.data;
}
const checkPin = async (pin) => {
    const url = `${BASE_URL}/users/pin`;
    let response;
    try {
        response = await axios.post(url, { pin });
    } catch (error) {
        throw error;
    }

    return response.data;
}

export { login, checkPin }