let userScore = 0;
let aiScore = 0;
const choices = document.querySelectorAll(".choice")
const resetButton = document.getElementById("reset")

const generate_ai_choice = () => {
    const arrChoiceList = ['rock', 'paper', 'scissor'];
    return arrChoiceList[Math.floor(Math.random() * 3)];
    
}

const drawGame =()=>{
    document.getElementById("msg").innerHTML = `Game was draw`
    document.getElementById("msg").style.backgroundColor="black"
}
const wining = (userWin, userChoice, aiChoice) =>{
    const winningGif = document.querySelector('.winning-gif img');
    const losingGif = document.querySelector('.loosing-gif img');
        if(userWin){
            console.log('you won')
            userScore++
            document.querySelector('.user-score').innerHTML = userScore
            document.getElementById("msg").innerHTML = `You won! your ${userChoice} beats ${aiChoice}`
            document.getElementById("msg").style.backgroundColor="green"
            winningGif.style.width = '200px';
            winningGif.style.height = '200px';
            losingGif.style.width = '0';
            losingGif.style.height = '0';
        }else{
            console.log('youlost')
            aiScore++
            document.querySelector('.ai-score').innerHTML = aiScore
           document.getElementById("msg").innerHTML = `You lost! ai's ${aiChoice} beats ${userChoice}`
           document.getElementById("msg").style.backgroundColor="red"
           winningGif.style.width = '0';
           winningGif.style.height = '0';
           losingGif.style.width = '200px';
           losingGif.style.height = '200px';
   
        }

        
}

const playGame = (userChoice ) =>{
        console.log(userChoice)
        const aiChoice = generate_ai_choice()
        console.log(aiChoice)

        if(userChoice === aiChoice){
            drawGame()
        }
        else{
            let userWin = true;
            if(userChoice === 'rock'){
                // paper, scissor
               userWin =  aiChoice === 'paper' ? false:true;
            
            }
            else if(userChoice === 'paper'){
                //rock, scissor
                userWin = aiChoice === 'scissor' ? false : true;
            }
            else{
                //rock, paper
                userWin = aiChoice === 'rock' ? false: true;
            }
            wining(userWin, userChoice, aiChoice)
        }
        console.log(userScore,aiScore)
        
    }
choices.forEach((choice) =>{ 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)

    })
})

// const reset =()=>{
//     resetButton.addEventListener("click", ()=>{
//         userScore = 0;
//         aiScore = 0
//     })
// }

// reset()

const reset = () => {
    resetButton.addEventListener("click", () => {
        userScore = 0;
        aiScore = 0;
        document.querySelector('.user-score').innerHTML = userScore;
        document.querySelector('.ai-score').innerHTML = aiScore;
        document.getElementById("msg").innerHTML = 'Start Game';
        document.getElementById("msg").style.backgroundColor = '';
        console.log('Scores have been reset.');
    });
}

reset();
