const findVowels=(str)=>{
 
    for(let i of str){
        if (i==='a' || i=='e'  || i=='i'  || i=='o'  || i=='u'){
            console.log(i)
        }
    }
}

let str="hello world";
findVowels(str)
