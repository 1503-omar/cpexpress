const { request, response } = require('express');
const express = require('express'); //importation express
const path = require('path');
const app = express();  // instantitation 

var day = new Date();
today = day.getDay();
var hour = day.getHours();
console.log(hour)
console.log(today)
// if (true
//     //(day <6 && day>0) && (hour<17 && hour>9) 
//     ) {
// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname+'/contact.html'))
// })

//2- route (get/post/put/delete)
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname+'public'))
// })}     
// else{
//     app.get('/', (req, res) => {
//       res.status(200).render('we are close right now');
//     });
//   }

if ((today <6 && today>0) && (hour>17))  {
    app.use(express.static(__dirname + '/public'))
}
else {
app.get('/', (req, res) => {
 res.send('we are close right now'); })
}



// 1- creation serveur
app.listen(8006, (err) => {
    err ? console.log(err, 'erreur') : console.log("connected")
})

