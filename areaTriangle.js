var areaInputs = document.querySelectorAll(".area-inputs")
var output = document.querySelector("#areaOutput")
var calBtn = document.querySelector("#calArea")


function calculateArea()
{
    if( Number(areaInputs[0].value) <= 0 || Number(areaInputs[1].value) <=0 )
    {
      
        output.innerText = "Please enter positive values."

    }
    else{
        var product = (Number(areaInputs[0].value) * Number(areaInputs[1].value))
        var area = product/2 
        output.innerText = "Area of triangle is " + area

    }
   

}
calBtn.addEventListener('click',calculateArea)