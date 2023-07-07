

// function myName(){
//     return `alok`
// }

// function lastName(){
//     return `Verma`
// }

// function fullName(callback1,callback2){
//     console.log(`${callback1} ${callback2}`)
// }

// fullName(myName(),lastName())

// function greet(name, callback) {
//     const message = "Hello, " + name + "!";
  
//     // Call the callback function and pass the message as an argument
//     callback(message);
//   }
  
//   function displayMessage(message) {
//     console.log(message);
//   }
  
//   // Call the greet function and provide the displayMessage function as the callback
//   greet("John", displayMessage);



// function wish(name,callback){
//     const msg=`My name is ${name}`

//     callback(msg)
// }

// function display(msg){
//     console.log(msg)
// }

// wish("Alok",display)

// Array.prototype.myMap=function nAp(cb){
//     let temp=[]

//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],i,this))
//     }

//     return temp
// }

// let arr=[3,4,5,6,]

// let mapped=arr.myMap((el,i,arr)=>{
//     return el*3
// })

// console.log(mapped)


// Array.prototype.myFilter=function nBc(cb){
//     let temp=[]

//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)) temp.push(this[i])
//     }

//     return temp
// }

// let arr=[4,6,8,9]

// let filtered=arr.myFilter((el,i,arr)=>{
//     return el>4
// })

// console.log(filtered)


Array.prototype.myReduce=function (cb,initialValue){
    let acc=initialValue  

    for(let i=0;i<this.length;i++){
       acc=acc? cb(acc,this[i],i,this):this[i]
    }

    return acc
}

let arr=[1,2,3,4]

let reduced=arr.myReduce((acc,el,i,arr)=>{
    return acc+el
})

console.log(reduced)
