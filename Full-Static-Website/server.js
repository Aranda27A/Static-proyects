import express from 'express';


const app = express();
const port = 3000

app.use(express.static('public'));

app.get( "/", (req, res) => {
    res.render('Index.ejs');
  });
app.get( "/Discografia", (req, res) => {
    res.render('Discografia.ejs');
  }); 
app.get("/Contacto", (req, res) => {
  res.render('Contacto.ejs');
});
app.get("/Videos", (req, res) => {
  res.render('Videos.ejs');
});
app.get("/Galeria", (req, res) => { 
  res.render('Galeria.ejs');
});





app.listen(port, (req, res)=> {
    console.log("You have a port in 3000");
  })