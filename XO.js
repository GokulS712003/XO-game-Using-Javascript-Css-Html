console.log("welcome to Tic Tac Toe")
let turn="X"
let gamer=false
//function to change turn

const changeTurn=()=>{
    return turn==="X"?"O":"X"
}
//function to check for a win

const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    //listing the indices and checking these indices are same in the boxtext. for each click.
    let wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" won !"
            gamer=true
        }
        


    })
}




//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='' && gamer==false){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkwin();
            if(!gamer){
            document.getElementsByClassName("info")[0].innerText="Turn for: "+turn;
            }
        }
    })
})
function reset(){
    let boxtext=document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="X"
    gamer=false
    document.getElementsByClassName("info")[0].innerText="Turn For: "+turn;
 }


