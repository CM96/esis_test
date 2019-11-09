const express    = require('express'),
      app        = express(),
      mongoose   = require('mongoose'),
      bodyParser = require('body-parser'),
      Student    = require('./database/student');



      
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/esis_rewrite', {useNewUrlParser: true, useUnifiedTopology: true,});//connect to the database server

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); // to get stuff from forms

//FAKE STUDENTS TO SHOW CONNECTION TO DATABASE
// THIS IS WHAT i HAVE IN MY DB, UNCOMMENT AND RUN. WE ARE GOING TO ADD MORE DATA LATER!!!
//  var amanda= new Student ({
//         firstName: 'Amanda',
//         lastName: 'Cerny',
//         yearInSchool:'Junior',
//         uwId:'w3106566',
//         gpa:3.3
//     });

// T
//  var amanda= new Student ({
//         firstName: 'Owen',
//         lastName: 'Jackson',
//         yearInSchool:'Sophomore',
//         uwId:'w3106565',
//         gpa:3.14
//     });
//TRYING TO FIND OWEN

// PUTTING A NEW STUDENT AMANDA IN DB
// Student.create(amanda,(error,newStudent)=>{ use same way to create owen
//     if (error) {
//         console.log(error);
//     }
//     else{
//         console.log("CREATED Successfully:\n");
//         console.log(newStudent);
//     }

//     });

// ROOT ROUTE
app.get ("/", (req, res)=>{
    Student.find({firstName:"Owen"},(error,foundstudent)=>{
        if (error) {
            console.log(error);
        }
        else{
            console.log("Success, found him:\n");
            console.log(foundstudent[0].firstName); //we are using index 0 because foundstudent is actually an array of object not just one object
            res.render('index',{student:foundstudent});
        }
    });
});


// SERVER SET UP
const port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server is currently running ");
});