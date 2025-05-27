// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: process.env.PUBLIC_BACKEND_URL,
    headers:{
     cache:"no-store"
    }
});



export default instance;