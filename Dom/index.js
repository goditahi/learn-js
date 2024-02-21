// let ele=document.querySelector('h1');
// console.log(ele.innerText)

// const button=document.querySelector('button')
// button.onclick=(e)=>{
//     ele.innerText="hello Anshul"
// }


// let bigBox=document.getElementById('outerBox')


// // box.firstChildNodes.innerText="hello";
// // bigBox.childNodes[1].innerText="kaise ho";
// // box.lastChildElement.innerText="kaise ho";


// console.dir(bigBox)

let ele=document.getElementById("demo");
ele.innerText="hello world"
ele.style.backgroundColor="red"
let link=document.getElementById("anc");
link.setAttribute("href", 'https://www.w3schools.com')



    // Create a new paragraph element
    var paragraph = document.createElement("p");
    console.dir(paragraph)

    paragraph.textContent="hello guys i am fine"

    // Append the paragraph element to the body of the document body is paraent element so we have to append paragraph as a child element
    document.body.appendChild(paragraph);


    // we have to make sure to give the parent value before removing the element 

    document.body.removeChild(link)

    document.getElementById("date").innerHTML="Date: " +Date();
    console.dir(document.write("helf"))