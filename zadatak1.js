import axios from 'axios';

const data = axios.get("https://jsonplaceholder.typicode.com/posts", { 
    headers: { "Accept-Encoding": "gzip,deflate,compress" },});


