// let buttons = document.querySelectorAll(".button");
// let body = document.querySelector("body");

// buttons.forEach((button) => {
//   console.log(button);
//   button.addEventListener("click", (e) => {
//     switch (e.target.id) {
//       case "grey":
//         body.style.backgroundColor = e.target.id;

//       case "yellow":
//         body.style.backgroundColor = e.target.id;

//       case "blue":
//         body.style.backgroundColor = e.target.id;

//       case "black":
//         body.style.backgroundColor = e.target.id;
//     }
//   });
// });


console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

