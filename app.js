let h2 = document.querySelector("h2");

let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

document.addEventListener("click", function(){
    if(started == false){
        console.log("game stated");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 3);
    let randCol = btns[randIndx];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randIndx);
    // console.log(randCol);
    gameSeq.push(randCol);
    console.log(gameSeq);
   gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("current level : ", level);
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHtml = `Game Over! Your score was <b>${level} </b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColour = btn.getAttribute("id");
    // console.log(userColour);
    userSeq.push(userColour);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}