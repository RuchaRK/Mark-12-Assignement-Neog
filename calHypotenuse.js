var inputSides = document.querySelectorAll(".triangle-side")
var chckBtn = document.querySelector("#check-btn")
var outputMsg = document.querySelector("#output")

function calculateHypotenuse()
{
    
    
    var sum = (Number(inputSides[0].value)**2 + Number(inputSides[1].value)**2)
    var hypotenuse = Math.sqrt(sum)
    outputMsg.innerText = "The length of hypotenuse is " + hypotenuse
    }
    
}

chckBtn.addEventListener('click',calculateHypotenuse)