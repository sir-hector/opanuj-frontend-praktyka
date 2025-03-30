import axios from 'axios';

const requestLogger = (config) => {
  config.metadata = {startTime: new Date()};
  return config;
}
const responseLogger = (response) => {
  const elapsedTime = new Date() - response.config.metadata.startTime;
  console.log(`Request to ${ response.config.url} took ${elapsedTime}ms`);
  return response;
}

axios.interceptors.request.use(requestLogger);
axios.interceptors.response.use(responseLogger);

const { data: articles } = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
