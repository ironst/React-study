import axios from 'axios';

const KEY = 'AIzaSyA_E-LVHglcan5Zq1sY_3pQzZInCmggWdM';

export default axios.create(
  {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part:'snippet',
      maxResults: 5,
      key: KEY,
      type:'video'
    }
  }
);
