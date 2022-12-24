import axios from 'axios';

 const keyAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URl,
});

export default keyAxios;