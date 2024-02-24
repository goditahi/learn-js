// const promiseOne= new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log('async hello world')
//     resolve();
//    },1000)
//     // resolve();
// })

// promiseOne.then(()=>{
//     console.log('promise done')
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('async function');
//         reject()
//     },1000)
// }).then(()=>{
//     console.log('promise Resolved')
// }).catch((e)=>{
//     console.log(e)
// }).finally(()=>{
//     console.log('hello finally ')
// })

// new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('async function');
//             // resolve({user:'anshul',email:'ans@gmail.com'});
//             reject({error:'nhi hai kuch'})
//         },1000)
//     }).then((data)=>{
//         console.log(data)
//     }).catch((e)=>{
//         console.log(e)
//     }).finally(()=>{
//         console.log('hello finally ')
//     })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        let error=0;
//        if(!error){
//         resolve({user:'anshul',email:'abc@gmail.com'})
//        }
//        else{
//         reject('error :');
//        }
//     },1000)
// }).then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e)
// }).finally(()=>{
//     console.log('hello finally ')
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// let userPromise= new Promise((resolve,reject)=>{
//     resolve(fetch('https://jsonplaceholder.typicode.com/users'));
// })

// userPromise.then((user)=>{
//    const data=user.json()
//    return data;
// }).then((data)=>{
//     data.forEach((ind)=>{
//         console.log(ind.name)
//     })
// })

// async function getUsers(){
//     try{
//         const res=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await res.json();
//         console.log(data);

//     }
//     catch (error){
//         console.log("E:",error)
//     }
// }

// getUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  // setTimeout(resolve, 100, 'foo'); means that after 100 milliseconds, the function resolve will be called with the argument 'foo'
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
