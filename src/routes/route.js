const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
});


//(1)---> -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get("/sol1" , function(req , res){
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr = [1,2,3,5,6,7]
    let len = arr.length;
    let totalSumOfArr = 0;

    for(let i=0 ; i<len ; i++){
        totalSumOfArr += arr[i];
    }

    let lastElementOfArr = arr.length-1;
    let consecutiveSum = arr[lastElementOfArr]*(arr[lastElementOfArr]+1)/2;
    let missingNum = consecutiveSum - totalSumOfArr;

    //=========or=========
    /*
    let lastElementOfArr1 = arr.pop();
    let consecutiveSum1 = lastElementOfArr1*(lastElementOfArr1+1)/2;
    let missingNum = consecutiveSum1 - totalSumOfArr;
    */
    res.send({data:missingNum});
});

//(2)---> -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
router.get("/sol2" , function(req , res){
    ////logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n 
    //consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38];
    let totalSumOfArr = 0;
    let len = arr.length;
    for(let i=0 ; i<len ; i++){
        totalSumOfArr += arr[i];
    }

    let firstElementOfArr = arr[0];
    let lastElementOfArr = arr[arr.length-1];
    let consecutiveSum = (len+1)*(firstElementOfArr + lastElementOfArr)/2;
    let missingNum = consecutiveSum - totalSumOfArr;

    //==========or=======
    /*
    let firstElementOfArr1 = arr[0];
    let lastElementOfArr1 = arr.pop();
    let consecutiveSum1 = (len+1)*(firstElementOfArr1 + lastElementOfArr1)/2;
    let missingNum = consecutiveSum1 - totalSumOfArr;
    */
    res.send({data:missingNum});
});

//(3)--> my self taken problem , not given in the assignment problem = write an api to find the more than two missing number
router.get("/sol3" , function(req , res){
    let arr = [1,2,4,6,7,9];
    let newArr = [];
    for(let i=0 ; i<arr.length-1 ; i++){
        if(arr[i]+1 != arr[i+1]){
            newArr.push(arr[i]+1);
        }
    }

    res.send(newArr);
})
module.exports = router;