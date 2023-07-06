

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



function wish(name,callback){
    const msg=`My name is ${name}`

    callback(msg)
}

function display(msg){
    console.log(msg)
}

wish("Alok",display)