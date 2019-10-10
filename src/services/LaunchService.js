import httpClient from './HttpClient';

const launchService = {
  get: () => httpClient.get('/launches')
};

export default launchService;
