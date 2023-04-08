// Add your code here
function submitData() {


    fetch(`http://localhost:3000/users`,{
        method : "POST",
        headers :{
         "Content-Type": "application/json",
            Accept: "application/json"
    },
        body: JSON.stringify({
            name:"Steve",
            email:"steve@steve.com"

    })
})
    .then (res => res.json())
    .then(object => console.log(object))

    .catch(error =>{
    alert("ERROR")
    console.log(error.message)
})
}
submitData();