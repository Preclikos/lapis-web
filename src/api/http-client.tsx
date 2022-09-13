import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_WEBAPI_API,
  headers: {
    'Content-type': 'application/json',
  },
});
