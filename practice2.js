
console.log("1")


console.log("wating")
const wait = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Waited 2 seconds");
    }, 4000);
  });
  
  wait.then(message => {
    console.log(message); // Output after 2 seconds
  });
  console.log("2")