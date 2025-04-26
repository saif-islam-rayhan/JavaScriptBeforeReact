const numbers=[22,44,22,44,555,5];
const Student={
    name:"sakib",
    age:22,
    address:"katakhali"
}
//templete string
const about=`My name is ${Student.name}`;
console.log(about);

//Arrow function  

const fun=()=>"hello";

const fun1=(n)=>n+11;

const fun2=(n) => {
    if(n%2==0){
        console.log("this is even");
    }else{
        console.log("this is not even");
    }
};

console.log(fun());
console.log(fun1(33));
fun2(4);

// 1. Array of Objects define 
const products = [
    { id: 1, name: "Book", price: 200 },
    { id: 2, name: "Pen", price: 50 },
    { id: 3, name: "Notebook", price: 120 }
  ];
  /// return hesebe jdi akta array pete chai tahole amra map use korbo
  // 2. map + arrow function 
  const productNames = products.map(product => product.name);
  
  console.log(productNames);

  //For each loop
  const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit => {
  console.log(fruit);
});
// Filter
const Numbers= [10, 55, 32, 70, 90, 45];

const result = Numbers.filter(num => num > 50);

console.log(result); / / [55, 70, 90]
//Find
const number = [10, 25, 60, 80, 30];

const firstBig = number.find(num => num > 50);

console.log(firstBig); // 60

//Desturacturing
const users = [
    { name: "John", age: 20 },
    { name: "Emma", age: 25 }
  ];
  
  // Array destructuring
  const [firstUser, secondUser] = users;
  
  // Object destructuring
  const { name, age } = firstUser;
  const { name: secondName, age: secondAge } = secondUser;
  
  console.log(name);        // John
  console.log(age);         // 20
  console.log(secondName);  // Emma
  console.log(secondAge);   // 25

  //JS → JSON → JS
  const user = {
    name: "Alice",
    age: 22,
    isStudent: true
  };
  
  // JavaScript object to JSON string
  const jsonString = JSON.stringify(user);
  console.log(jsonString);
  // Output: {"name":"Alice","age":22,"isStudent":true}
  
  // JSON string back to JavaScript object
  const parsedUser = JSON.parse(jsonString);
  console.log(parsedUser);
  // Output: { name: 'Alice', age: 22, isStudent: true }
  
  console.log(parsedUser.name);      // Alice
  console.log(parsedUser.age);       // 22
  console.log(parsedUser.isStudent); // true


  //                                Promise
  const myPromise = new Promise((resolve, reject) => {
    const success = true;
  
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected.");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result); // if resolved
    })
    .catch(error => {
      console.log(error); // if rejected
    });

    //                                setTimeout
    const wait = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Waited 2 seconds");
        }, 2000);
      });
      
      wait.then(message => {
        console.log(message); // Output after 2 seconds
      });


      //                           Async/Await with Promise
      function getData() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Data received!");
          }, 1000);
        });
      }
      
      async function showData() {
        const result = await getData();
        console.log(result); // Output: Data received!
      }
      
      showData();
      
  //                                        setInterval
  let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Count:", count);

  if (count === 5) {
    clearInterval(intervalId); // stops the interval after 5 seconds
    console.log("Interval stopped.");
  }
}, 1000); // runs every 1000ms = 1 second

//                                        Loop
// Traditional for loop
for (let i = 0; i < 5; i++) {
  console.log("Traditional for loop:", i);
}

// for...of loop (used to iterate over iterable items like arrays)
const numb = [10, 20, 30, 40];
for (const num of numb) {
  console.log("for...of loop value:", num);
}

// for...in loop (used to iterate over object keys)
const person = {
  name: "Alice",
  age: 22,
  city: "Dhaka"
};

for (const key in person) {
  console.log(`for...in loop key: ${key}, value: ${person[key]}`);
}