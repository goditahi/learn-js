let celsius= document.querySelector('#celsius');

celsius.addEventListener('input',(e)=>{
    let cel =e.target.value;
    let button =document.querySelector('#button1');
    let result=document.querySelector('#result1')
    button.addEventListener('click',(e)=>{
        var celsiusOutput = ((cel - 32) * (5 / 9)).toFixed(2);
        result.innerText=`${celsiusOutput}`
    })

})