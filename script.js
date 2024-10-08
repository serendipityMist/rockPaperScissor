const choiceUser = document.querySelectorAll("img");
const imgArr=["rock.jpg","scissor.jpg","paper.jpg"];
const humanChoice = document.querySelector(".humanChoice");
const aiChoice = document.querySelector(".aiTurn");
const winText = document.querySelector(".win");
const playerName = document.querySelector(".name");
let userName;
const currentPlayer = document.querySelector(".currentPlayer");
const button = document.querySelector(".getName");

let ranVal;

const userChoice=(choice)=>{
    if (!userName ) {
        alert("Please enter your name to play the game.");
        return;  
    }

    ranVal = Math.floor(Math.random()*3);
    console.log(ranVal);
    console.log(choice);
    humanChoice.innerHTML= `<img src="${imgArr[choice]}" alt="${imgArr[choice]}">`
    aiChoice.innerHTML= `<img src="${imgArr[ranVal]}" alt="${imgArr[ranVal]}">`
    winner(choice,ranVal);
   
}

const winner=(choice,ranVal)=>{
    if(choice==ranVal){
        winText.innerText="DRAW";
    }
    else if(
        (choice === 0 && ranVal === 1) ||  // Rock beats Scissor
        (choice === 1 && ranVal === 2) ||  // Scissor beats Paper
        (choice === 2 && ranVal === 0)     // Paper beats Rock
    ) {
        winText.innerText=userName;
    }
    else{
        winText.innerHTML="AI";
    }
}


const getPlayer=()=>{
    if(playerName.value!=""){
        userName=playerName.value;
        currentPlayer.innerText=userName;
        console.log(userName);
        playerName.value="";
    }
    else{
        return alert("Please enter your name");
    }
}