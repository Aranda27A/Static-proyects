import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get( "/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

app.get( "/Discografia", (req, res) => {
    res.sendFile(__dirname + '/views/Discografia.html');
  });
app.get("/Contacto", (req, res) => {
  res.sendFile(__dirname + '/views/Contact.html');
});
app.get("/Videos", (req, res) => {
  res.sendFile(__dirname + '/views/videos.html');
});
app.get("/Galeria", (req, res) => {
  res.sendFile(__dirname + '/views/galeria.html');
});






app.listen(port, (req, res)=> {
    console.log("You have a port in 3000");
  })