// almost everything in js is object 
//  concept of classes in js in less 


//  we can create promises but in most of the cases we only consume promises

//  .then : if response come 
// .catch : if error occur 
// .finally : it must run and return the response 

//  creating promises 
const promiseOne=new Promise(

    function(resolve,reject){
        //  do an async task 
        //  DB calls , cryptography , network related

        setTimeout(function(){
            console.log('Async task is complete');
            // conecting .then and resolve 
            resolve()

        },1000)

    }
);  //  promise take call back (function )

//  consumption of promise :
// .then has a relation with resolve 
promiseOne.then(
    function (){// this function aumatically (by deafualt) receives an argument  which is return from promise function 

        console.log("promise consumed");

    }
)  // .then takes function(callback)


// ============================Method 2 =======================
//   combining creation and then the resolve call of a promise

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();

    },1000)
}).then(function(){
    console.log("REsolve the 2nd promise");

})



// ============================Method 3=======================

const PromiseThree=new Promise(function (resolve, reject ){
    setTimeout(function(){
resolve({username:"Areeba", email:"example@gmail.com"})// passing an object as argument
    },1000)
})
PromiseThree.then(function(user){// here the function is getting an object which is actually being passed in resolve
console.log(user);

});


// ============================Method 4=======================

const promiseFour=new Promise(
    function(resolve,reject){
        setTimeout(function(){
            let error=false;
            if(!error){
                resolve({username:"Coder",password:"123"})
            }
            else{// request being rejected :error 
                reject('ERROR:Something went wrong');


            }

        },1000)

    }


)
//  how to avoid callback hell 

// const checkReturn=promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;

// })

// console.log(checkReturn); // throws error 
promiseFour.then((user)=>{
        console.log(user);
        return user.username;// this return will be in next .then 
    
    }).then((username)=>{
console.log(username);

    }).catch(function(error){
        console.log(error);

    }).finally(()=>console.log("The promise is either resolved or rejected"));


// error: reject , catch 
// promise resolve :then , resolve 
//  finally : tell me what happened in the end , is it resolved or rejected ?
// finally always call in both cases

// ============================Method 5=======================

const PromiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true; // in this case error is design , so async await cannot handle error directly 

        if(!error){
            resolve({username:"JavaScriipt",password:"123"})
        }
        else{// request being rejected :error 
            reject('ERROR:JS went wrong');


        }

    },1000)

})
//  we can handle promise with async await also instead of using .then or .catch

// PromiseFive.then
//  in this .catch cannot handle gracefully 
//  but in Database we prefer aysnc await instead of .then 
async function ConsumeFive() {
    try{
        const response=await PromiseFive;
    console.log(response);
    }
    catch(error){
console.log(error);

    }

}

ConsumeFive()



