import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));






const app = express();
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get( "/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
  
  


  app.listen(port, (req, res)=> {
    console.log("You have a port in 3000");
  })