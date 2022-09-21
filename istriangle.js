var inputs = document.querySelectorAll(".angle-input")
var output = document.querySelector("#outputMsg")

var checkBtn = document.querySelector("#check-button")

function calculateSum(angle1,angle2,angle3)
{
    return (angle1+angle2+angle3)

}
function validateIsTriangle()
{
    var sum = calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if(sum === 180)
    {
        output.innerText = "WOW !!! the angles u entered form a triangle";
    }
    else{
        output.innerText = "Sorry !!! the angles u entered  don't form a triangle";
    }

}

checkBtn.addEventListener('click',validateIsTriangle)
