
// things take time 
//  like the conversion of response to json also take time 
//  if we donot await for the conversion , async will not wait for it and left 

async function getAllUsers(){
    try{
        const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    // console.log(response)

        const data=await response.json();
        console.log(data)
    }
    catch(error){
        console.log("something went wrong :",error);

    }
    
   

}

getAllUsers()


//  in .then and catch format 
const PromiseOne=new Promise((resolve,reject)=>{
    const error=false;
    if (!error){
        const response=fetch('https://api.github.com/users/hiteshchoudhary')
        resolve(response);

return response

    }

    else{
        reject("Error:fetching error")
    }

})

PromiseOne.then((response)=>{
    const data=response.json()

    .then((data)=>{
        console.log(data);
    })

    .catch((jsonError) =>console.log("Error parsing JSON:", jsonError)); // Handle JSON parsing errors
})
.catch((error) => {
    console.log(error); // Handle the outer promise errors
});

//  in .then and catch format 
etch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();

})
.then((data)=>{
    console.log(data);


})
.catch((error)=>{
    console.log(error);


})
