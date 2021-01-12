const express = require ('express');
const path=require ('path');
// const moment= require ('moment');
// const timer =require('./middleware/timer');

const app = express();

 var today = new Date();
function timer (req,res,next) { 
   
if(today.getDay() == 6 || today.getDay() == 0) {
    res.send('<h1>the website is not available try later </h1>');
   }
   else if ((today.getHours() < 9 )|| (today.getHours() >17 ))
   {
    res.send('<h1> the website is not available try later </h1>');
   }
   else
{
next ();
}
    
};
console.log(today.getDay())
console.log(today.getHours())

app.get('/',timer, (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/home.html'));

});
app.get('/services',timer , (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/services.html'));

});
app.get('/contact',timer, (req, res) =>{
    res.sendFile(path.join(__dirname + '/public/contact.html'));

});
app.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname + '/public/css/style.css');
});


const PORT = process.env.PORT || 5000;
  

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

