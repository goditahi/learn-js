// let a=[1,2,3,4,5,6];
// a.pop()    // remove from end
// a.shift()  // remove from front 
// a.unshift(45) // add in front
// a.push(343);  //add in last
// console.log(a)

let a= new Array([2,3,4,2,21])
/*In this call to splice(), the first argument says where to start removing items,
 and the second argument says how many items should be removed. So you can remove more than one item */
 // it store in new array till it delete items 
b=a.splice(0,2,2)
console.log(b)