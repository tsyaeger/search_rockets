import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const httpClient = axios.create({ baseURL: SERVICES_URL });

export default httpClient;
