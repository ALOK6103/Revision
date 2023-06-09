
// function fetchData(callback) {
//     // Simulating an asynchronous operation
//     setTimeout(function() {
//       const data = 'Hello, world!';
//       callback(data); // Invoke the callback with the data
//     }, 2000);
//   }
  
//   function processResult(result) {
//     console.log('Received data:', result);
//   }
  
//   fetchData(processResult); // Pass the processResult function as a callback

function greeting(name) {
    console.log(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = "Please enter your name."
    callback(name);
  }
  
  processUserInput(greeting);
  
  


  function process(callback){
    const fName="Alok"
    callback(fName)
  }

  function greet(fName){
    console.log(`Hi my Name is,${fName}`)
  }

  process(greet)