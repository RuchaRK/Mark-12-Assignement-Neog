var inputSides = document.querySelectorAll(".triangle-side")
var chckBtn = document.querySelector("#check-btn")
var outputMsg = document.querySelector("#output")

function calculateHypotenuse()
{
   if(Math.sign(Number(inputSides[0].value))=== -1 || Math.sign(Number(inputSides[1].value)) === -1)
   {
     outputMsg.innerText = "The sides cannot be negative" 
   }
    
   else{
     
    var sum = (Number(inputSides[0].value)**2 + Number(inputSides[1].value)**2)
    var hypotenuse = Math.sqrt(sum)
    outputMsg.innerText = "The length of hypotenuse is " + hypotenuse.toFixed(2)
   }
   
    
}

chckBtn.addEventListener('click',calculateHypotenuse)