
import axios from 'axios';
import fs from 'fs';


const getData = async function(){
   
    try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', 
    {headers: {"Accept-Encoding": "gzip,deflate,compress"},});

    const data = response.data;
      console.log(data);
      // let file1 = new File(["data"], "data.json", {
      //   type: "text/plain",
      // });  
      let file = JSON.stringify(data);
        fs.writeFileSync("posts.json", file);
     // parseData();

    return file;
  } catch (errors) {
    console.error("Error, file not created or data is invalid!");
  }
};

// async function parseData() { 
//   const promise = new Promise(function (resolve, reject) {
//     try {
//       let file1 = fs.readFileSync("posts.json");
//       if (file1) {
//         resolve(console.log(JSON.parse(file1)));
//       }

//     } catch (err) { 
//       reject("File not found");
//     }
//   }); 
// }



getData();
