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


