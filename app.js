const express  = require('express'),
      app      = express();

app.use(express.static('public/'));


// ROOT ROUTE
app.get ("/", (req, res)=>{
    res.sendFile('index.html');
});


// SERVER SET UP
const port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server is currently running ");
});