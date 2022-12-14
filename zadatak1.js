
import axios from 'axios';
import fs from 'fs';


const getData = async function(){
   
    try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', 
    {headers: {"Accept-Encoding": "gzip,deflate,compress"},});

    const data = response.data;
    console.log(data);
    
    let file = JSON.stringify(data);
    
    fs.writeFileSync('posts.json', file);

    return file;
  } catch (errors) {
    console.error(errors);
  }
};




getData();
