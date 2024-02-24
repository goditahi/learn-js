
    const dropdown1 = document.getElementById("dropdown1");
    const dropdown2 = document.getElementById("dropdown2");
    let result=document.querySelector('#result');
    const button=document.querySelector('button');
    let currency1='USD';
    let currency2='USD';
 
  

    dropdown1.addEventListener("change", function() {
        currency1=dropdown1.value;
        console.log(currency1)
    });
  
    // Add event listener to dropdown2
    dropdown2.addEventListener("change", function() {
        currency2=dropdown2.value;
        console.log(currency2)
    });

     async function getAnswer(from, to, amt){
        
        let api_url = `https://api.api-ninjas.com/v1/convertcurrency?want=${from}&have=${to}&amount=${amt}`;
        
        try {
            let response=(await fetch(api_url,
                {
                    method: "GET",
                    headers: {
                      "X-Api-Key":"19f/Vc0/45Fo4LAAAwx/yQ==qWpMjaD9eCiJPPgQ"
                    }
                  }));
            let data=await response.json();

            let new_amount=data.new_amount
            
            if(new_amount===undefined){
                result.textContent=`Enter Valid Amount`;
            }else{
                result.textContent=` ${data.new_amount}`
            }
            
            
        } catch (error) {
            console.log(error)
            result.textContent=`${error}`
        }
        
        
    }


button.addEventListener('click',()=>{
    let amount=document.querySelector('input').value;
    getAnswer(currency1,currency2,amount)
    
})

  