const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('print hello')
    },1000);
})

promiseOne.then(()=>{
    console('printed and it working properly');
})
