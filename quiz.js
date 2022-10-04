var quizInputs = document.querySelector('.quizForm')
var submitButton = document.querySelector("#submitAns")
var outputMsg = document.querySelector("#output")

var correctAns = ["90","right","Polygon","Isosceles","Hypotenuse","Two"]

function checkScores()
{
    var score=0
    var index=0
    const data = new FormData(quizInputs);
    for (const entry of data.values() )
    {
        if(entry === correctAns[index])
        {
            score=score+1
        }
        index=index+1

    }
    outputMsg.innerText = "Your score is " + score;
}

submitButton.addEventListener('click',checkScores)