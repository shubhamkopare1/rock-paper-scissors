let scoreUser = 0;
let scoreCom = 0;
const images = document.querySelectorAll(".spspng");
const outputName=document.querySelector(".footer")
const outputs=document.querySelector(".output")
const scoreUsers=document.querySelector(".scoreUser")
const scoreComs=document.querySelector(".scoreCom")
const audio=document.querySelector("#audio")
const refresh=document.querySelector(".refresh")

let compChoise=()=>{
let choices = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random() *3);
let randomChoice = choices[randomIndex];
return randomChoice;
}

let playGame=(userChoise)=>{
   let comChoise=compChoise();
   console.log("user choise =" ,userChoise);
   console.log(`comp Choise = ${comChoise}`);
if (comChoise===userChoise) {
   outputName.innerText="Match is Draw!"
   outputName.style.backgroundColor="brown" 
  
}
else if(
   (userChoise === "rock" && comChoise === "scissors") ||
   (userChoise === "paper" && comChoise === "rock") ||
   (userChoise === "scissors" && comChoise === "paper")
) {
 outputName.innerText=`you Win! your ${userChoise} beats ${comChoise}`
 outputName.style.backgroundColor="green";
 scoreUser++;
 scoreUsers.innerText=scoreUser;
}
else{
   outputName.innerText=` you lost. ${comChoise} beats your ${userChoise}`
   outputName.style.backgroundColor= "red";
   scoreCom++;
   scoreComs.innerText=scoreCom;
}
}

refresh.addEventListener("click",function(){
 scoreUser = 0;
 scoreCom = 0;

outputName.innerText=" pick your move"
outputName.style.backgroundColor="" 
scoreUsers.innerText= scoreUser;
scoreComs.innerText=scoreCom;
const sound=new Audio("click-button-140881.mp3")
const sounds=sound.play();
onclick(sounds)
    
})


images.forEach((spspng) => {
    spspng.addEventListener("click", () => {
        let userChoise=spspng.getAttribute("id")
        playGame(userChoise)
        const sound=new Audio("click-button-140881.mp3")
    const sounds=sound.play();
    onclick(sounds)
        
    });
});