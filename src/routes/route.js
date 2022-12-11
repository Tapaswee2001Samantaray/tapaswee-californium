const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');



//(1)-->get api problem 1
router.get("/GET/movies" , function(req , res){
    let moviesArr = ["Rang de basanti" , "The shining" , "Lord of the rings" , "Batman begins"];
    // console.log(moviesArr);

    // res.send("Successfully print the list of movies.");
    res.send(moviesArr);
});

//(2)-->get api problem 2
router.get("/GET/movies/:indexNumber" , function(req , res){
    let moviesArr = ["Rang de basanti" , "The shining" , "Lord of the rings" , "Batman begins"];
    //(3)--> get api problem 3
    if(req.params.indexNumber > moviesArr.length-1){
        //  console.log("Error:plase define index number less than or equlas to 3");
         res.send("Error:plase define index number less than or equlas to 3");
    }else{
       
        // console.log("The movie of index "+req.params.indexNumber+" is: "+moviesArr[req.params.indexNumber]);
        res.send("The movie of index "+req.params.indexNumber+" is: "+moviesArr[req.params.indexNumber]);
    }

    // res.send("Successfully print the indexed movie.");
    // res.send(moviesArr[req.params.indexNumber]);
});

//(4)-->get api problem 4
router.get("/GET/films" , function(req , res){
    let filmsArr = [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
    //    console.log(filmsArr);

       res.send(filmsArr);
       
});

//(5)-->get api problem 5
router.get("/films/:filmId" , function(req , res){
    let filmsArr1 = [ {
        "id": 1,
        "name": 'The Shining'
       }, {
        "id": 2,
        "name": 'Incendies'
       }, {
        "id": 3,
        "name": 'Rang de Basanti'
       }, {
        "id": 4,
        "name": 'Finding Nemo'
    }]
     for(let i = 0 ; i<filmsArr1.length ; i++){
        if(filmsArr1[i].id == req.params.filmId){
            res.send(filmsArr1[i]);
            break;
        }
        if(filmsArr1[i].id > filmsArr1.length-1){
            res.send("No movies exist with this id. Please Enter one number from 1 upto 4");
            
        }
    }
    // res.send("No movies exist with this id. Please Enter between , from 0 upto 3");
    // let obj = {
    //     "id" : 1,
    //     "name" : "Fida"
    // }
    // if(obj.id == req.params.filmId){
    //         res.send(obj.name);
    //     }
    //     res.send("No movies exist with this id. Please Enter between , from 0 upto 3")

});





router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})

module.exports = router;