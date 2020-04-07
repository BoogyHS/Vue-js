import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config: any) => {
    config.url = `${config.url}?key=AIzaSyDcaQ98SDDINotHOZCvOwzY6n9TXsbs1GU`

    return config;
});

export default instance;