// Selecting DOM elements
const rollBtn=document.querySelector('.btn--roll');
const diceEle=document.querySelector('.dice');
const btnHoldEle=document.querySelector('.btn--hold');

let currentScore=0;
const playerScores=[0, 0];
let activePlayer=0;

const switchPlayer=()=>{
    currentScore=0;
    document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
    activePlayer==0 ? (activePlayer=1) : (activePlayer=0);
};
rollBtn.addEventListener("click",function(){
    // 1.Generate random dice
    const dice = Math.trunc(Math.random()*6)+1;
    diceEle.src=`imgs/dice-${dice}.png`

    if(dice!==1){
        currentScore+=dice;
        document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
        }else{
            switchPlayer();
        }
});
btnHoldEle.addEventListener("click",function(){
    playerScores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=playerScores[activePlayer];
    switchPlayer();
});
