//  -----------------------------------Call Method Pollyfils--------------------------------------


// let car1={
//     color:"red",
//     company:"Mercidees"
// }


// function purcahseCar(currency,price){
//     console.log(
//         `I have purchased ${this.color} --- ${this.company} car for ${currency} with ${price}`
//     )
// }

// Function.prototype.myCall=function (context={},...args){
//     if(typeof this!=="function"){
//         throw new Error( this+"this is not collable")
//     }

//     context.fn=this
//     context.fn(...args)
// }

// purcahseCar.myCall(car1,"Rs",500000)






// /------------------------------------------------Creating Object---------------------------- 

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
const person = new Person("John", 25);
console.log(person)

  