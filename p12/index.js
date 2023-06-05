const person = {
    name: 'John',
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  const greetJohn = person.greet.bind(person);
  greetJohn(); // Hello, John!
  

function init(){
  let Name="alok"

 function myname(){
  
    console.log(Name)
  }

  myname()

}

init()

Array.prototype.myMap=function(cb){
  let temp=[]

  for (let i = 0; i < this.length; i++) {
    
     temp.push(cb(this[i],i,this))
    
  }

  return temp
}

const nums=[1,2,3,4]

let mul=nums.myMap((num,i,arr)=>{
   return num*3
})

console.log(mul)



Array.prototype.myFilter=function (cb){
  let temp=[]

  for (let i = 0; i < this.length; i++) {
   
    if(cb(this[i],i,this)){
      temp.push(this[i])
    }
    
  }

  return temp
}

// const nums=[1,2,3,4]


let fil=nums.myFilter((num)=>{
  return num>2
})

console.log(fil)