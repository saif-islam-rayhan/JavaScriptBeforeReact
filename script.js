const  Loaddata=()=>{
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error =>console.error('error happend',error)
      )
}
//async function
const Loaddata2=async()=>{

    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data= await res.json();
        console.log(data);
    }
    catch(error){
        console.log("data load error");
    }
   
}


