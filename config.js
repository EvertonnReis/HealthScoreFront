// config.js
const API_URL_LOCAL = 'http://localhost:8080';
const API_URL_EXTERNA = 'http://192.168.3.2:8080';
const NODE_ENV = 'production';

const getEnvVars = () => {
  return {
    // apiUrl: NODE_ENV === 'production' ? API_URL_EXTERNA : API_URL_LOCAL,
    apiUrl: API_URL_LOCAL
  };
};

export default getEnvVars;
