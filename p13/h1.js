
function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(function() {
      const data = 'Hello, world!';
      callback(data); // Invoke the callback with the data
    }, 2000);
  }
  
  function processResult(result) {
    console.log('Received data:', result);
  }
  
  fetchData(processResult); // Pass the processResult function as a callback
  