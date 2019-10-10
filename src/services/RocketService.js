import httpClient from './HttpClient';

const rocketService = {
  get: (id) => httpClient.get(`/rockets/${id}`)
};

export default rocketService;

// index.js file
/*
export  { default as rocketService } from './rocketService.js';
*/
