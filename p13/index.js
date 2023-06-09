// How Node js work
// How event loop work 
// How authentication,authorization work work
// Advanced javascript - what is output for the code
// setTime out 
// web api 
// create basic react app 
// component take multple parameter
// given array containg number ,string  reverse number and string both 
// median of  two sorted array


const fs=require("fs")

try {
    const data=fs.readFileSync("./h1.js","utf-8")
    console.log(data)
} catch (error) {
    console.log(error)
}