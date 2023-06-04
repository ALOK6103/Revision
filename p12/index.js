const person = {
    name: 'John',
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  const greetJohn = person.greet.bind(person);
  greetJohn(); // Hello, John!
  