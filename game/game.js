let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let boxcontainer=document.querySelector(".box-container")
let boxes=[box1,box2,box3];
let ball1=document.querySelector("#ball1");
let ball2=document.querySelector("#ball2");
let ball3=document.querySelector("#ball3");
let gameresult=document.querySelector("#result");
let round=0;
round=prompt("Oyun kaç round olsun?");

let game=document.querySelector("#game");
let win=document.querySelector("#win");
game.innerHTML=round+" oyun hakkınız kaldı ";

function computerselected() {
    let choose=Math.floor(Math.random() * 3) + 1;
    console.log("pc: "+choose);
    return choose;
}
box1.onclick=choosethebox;
box2.onclick=choosethebox;
box3.onclick=choosethebox;

function choosethebox() {
    let pc=computerselected();
    let player=this.dataset.id;
    if(pc==player){
        result="Kazandın!";
        finishthegame();
    }
    else{
        result="Top "+(pc)+" numaralı kutuda."
    }
    if(pc==1){
        box1.style= "z-index: 1;";
        ball1.style = "left: 90px ;top: 170px; ";
        box1.style="top:100px;";
        box2.style = "bottom:0px";
        box3.style = "bottom:0px";
    }
    else if(pc==2){
        box2.style= "z-index: 1;";
        ball2.style = "left: 420px ;top: 170px; ";
        box2.style="top:100px;";
        box1.style = "bottom:0px";
        box3.style = "bottom:0px";
    }
    else{
        box3.style= "z-index: 1;";
        ball3.style = "left: 720px ;top: 170px; ";
        box3.style="top:100px;";
        box1.style = "bottom:0px";
        box2.style ="bottom:0px";
    }
    round--;
    game.innerHTML=round+" oyun hakkınız kaldı ";
    gameresult.innerHTML=result;
    if(round==0){
        box1.style="bottom:0px;";
        box2.style = "bottom:0px";
        box3.style = "bottom:0px";
        game.innerHTML="Hakkınız bitti. ";
        gameresult.innerHTML="OYUN BİTTİ";
        box1.onclick=null;
        box2.onclick=null;
        box3.onclick=null;
    }
}
let g_win=0;
function finishthegame(){
    g_win+=1;
    win.innerHTML="Kazanılan oyun sayısı: "+g_win;
}


//let finish= Math.floor(Number(round)/2)+1;
//console.log(finish)

