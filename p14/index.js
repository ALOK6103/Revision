
// function fisrt(a){
//     return function(b){
//         return function(c){
//             console.log(a,b,c)
//         }
//     }
// }

// fisrt(2)(3)(4)



// function fisrt(a,b,c){
   
//             console.log(a,b,c)
      
// }

// fisrt(2,3,4)

// let a={}

// a["b"]=400
// a["c"]=500

// console.log(a["b"])


// let user={
//     name:"alok",
//     age:27
// }

// console.log(JSON.stringify(user))

// let arr=["ab","ac","ak"]

// console.log([...arr])


// let user={
//     name:"alok",
//     age:27
// }

// const {name,age}=user

// const {name:myName}=user

// console.log(myName,age)

// console.log("start")

// function userName(myName,cb){
//     setTimeout(() => {
//         cb(`My name is ${myName}`)
//     }, 2000);
    
// }

// const messege=userName("alok",function(mesg){
//     console.log(mesg)
// })



// console.log("end")




console.log("start")

const sub=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let result=true
        if(result) resolve("Success")
        else reject(new Error("Failure"))
    },2000)
  
})

sub.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})


console.log("end")