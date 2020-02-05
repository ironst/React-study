import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID edac71dc180ae3e597058d0f69604fa59e21ade34c956e4cfe1a3b925d94dfd3'
  }
});
