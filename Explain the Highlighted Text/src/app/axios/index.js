import axios from 'axios';

// Axios instance with headers and authorization
const instance = axios.create({
  baseURL: 'https://api.openai.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ process.env.NEXT_PUBLIC_OPENAI_API_KEY }`,
  },
});

export default instance;