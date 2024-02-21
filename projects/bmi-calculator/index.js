let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `<p>Please enter valid height because it is ${height}</p>`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<p>Please enter valid weight  because it is ${weight}</p>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
      if (bmi < 18.6){
        result.innerHTML = `<p>Your bmi is:${bmi} And u are under weigth</p>`;
        result.setAttribute('style', 'background-color: red;');
      }
        

      if (bmi > 18.6 && bmi < 24.9){
        result.innerHTML = `<p>Your bmi is:${bmi} And u are normal range</p>`;
        result.setAttribute('style', 'background-color: green;');
      }
        

      if (bmi > 24.9){
        result.innerHTML = `<p>Your bmi is:${bmi} And u are under over weight</p>`;
        result.setAttribute('style', 'background-color: red;');
      }
        
    
  }
});
