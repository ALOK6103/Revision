
// pollyfills for map,filter,reduce

// Array.prototype.myMap=function nAb(cd){
//     let temp=[]

//     for(let i=0;i<this.length;i++){
//         temp.push(cd(this[i],i,this))
//     }

//     return temp
// }


// let arr=[1,2,3,4,5]

// let mapped=arr.myMap((el,i,arr)=>{
//     return el*3
// })

// console.log(mapped)



// Array.prototype.myFilter=function nAb(cd){
//     let temp=[]

//     for(let i=0;i<this.length;i++){
//         if(cd(this[i],i,this)) temp.push(this[i])
//     }

//     return temp
// }


// let arr=[1,2,3,4,5]

// let filtered=arr.myFilter((el,i,arr)=>{
//     return el>3
// })

// console.log(filtered)


// Array.prototype.myReduce=function (cb,initialValue){

//     var acc=initialValue

//     for(let i=0;i<this.length;i++){
//         acc=acc? cb(acc,this[i],i,this):this[i]
//     }

//     return acc
// }

// let arr=[1,2,3,4,5]

// let reducedd=arr.myReduce((acc,el,i,arr)=>{
//     return acc+el
// })

// console.log(reducedd)


// let arr=["alok","rohit","dev"]

// for(let i=0;i<arr.length;i++){
//    console.log(arr[i].toUpperCase())
// }

// let c=0

// function test(){

//     if(c==0){
//       c=1

//         console.log(c)
//     }

//     console.log(c)
// }

// test()




// -----------------------------------------------CURRING-------------------------------



// function test(oper){
//     return function(a){
//         return function(b){
//             if(oper=="sum") return a+b
//             else if(oper=="mul")  return a*b
//         }
//     }
// }

// console.log(test("mul")(3)(4))





// ----------------------------------------------INFINITE CURRING-------------------------------



// function test(a){
//     return function(b){
//         if(b) return test(a+b)
//         return a
//     }
// }

// console.log(test(5)(6)(7)(8)(9)())





// -----------------------converting normal func(a,b,c)  to curried func(a)(b)(c)---------------

// function curry(func){
//     return function curriedFunc(...args){
//         //console.log(func.length,args.length)
//         if(args.length>=func.length){
//             return func(...args)
//         }else{
//             return function(...next){
//                 console.log(...next,...args)

//                 return curriedFunc(...args,...next)
//             }
//         }
//     }
// }


// let sum=(a,b,c,d)=>a+b+c+d 

// const totalSum=curry(sum)

// console.log(totalSum(1)(2)(3)(4))


// ----------------------------objects--------------------------

// let user={
//     name:"alok",
//     age:"26",
//     "like this":"yes"
// }

// delete user.age
// console.log(user["like this"])




// let obj={}

// let f_name="alok"
// let l_name="verma"

// obj.f_name=f_name
// obj.l_name=l_name

// console.log(obj)



// let obj={
//     age:29,
//     year:97
// }

// mlt(obj)


// function mlt(obj){
//     for(let key in obj){
//         if(typeof obj[key]=="number"){
//             obj[key]=obj[key]*2
//         }
//     }
// }

// console.log(obj)


// const a={}
// const b={key:"b"}
// const c={key:"c"}

// a[b]=123
// a[c]=456

// console.log(a[b],b)



// let user={
//     name:"alok",
//     age:26
// }

// let obj={
//     clg:"masai",
//     ...user
// }


// console.log(obj)


// ------------------------------------------Destructuring--------------------------

// let user={
//     name:"alok",
//     age:26,
//     obj:{
//         clg:"masai"
//     }
// }

// user.age=28
// const {name,age,obj:{clg}}=user

// console.log(clg)


// -----------------------------This-----------------------------------

// function test(){
//     return {
//         name:"alok",
//         ref(){
//             return this
//         }
//     }
// }

// let user=test()

// console.log(user.ref().name)





let test={
   
        name:"alok",
        ref(){
           console.log(this.name)
        }
   
}

setTimeout(()=>{
    test.ref()
},10000)

