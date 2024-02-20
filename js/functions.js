// const findVowels=(str)=>{
 
//     for(let i of str){
//         if (i==='a' || i=='e'  || i=='i'  || i=='o'  || i=='u'){
//             console.log(i)
//         }
//     }
// }

// let str="hello world";
// findVowels(str)

// arr=[2,3,5,2,4]

// arr.forEach(element => {
//     console.log(element**2);
// });

// const square= arr.map(ele=> {return ele**2})
// console.log(square)

// const onlyEven=arr.filter(element=> {return element%2===0})
// console.log(onlyEven)

// const obj={
//     name:"anshul",
//     age:22,
//     learning:'js'
// }
//const arr= obj.map((ele,ind)=>{return ele})
//TypeError: obj.map is not a function
// const arr= obj.map((ele,ind)=>{return ele})
// console.log(arr)
// let newArray=Object.keys(obj).map(ele=>{return ele})
// console.log(newArray)

// reduce function
// arr=[1,2,3,4,4]

// const sum=arr.reduce((acc,ind)=>{return acc+ind})
// console.log(sum)

// const prices = {
//     a: 100,
//     b: 200,
//     c: 300
//   };

//   const totalPayment=Object.values(prices).reduce((acc,curr)=>{return acc+curr});
//   console.log(totalPayment)


const prices = {
    a: 100,
    b: 200,
    c: 300
  };

  const totalPayment=Object.values(prices).reduce((prev,curr)=>{return prev});

  console.log(totalPayment)