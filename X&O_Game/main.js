let x_or_o = 'O';
let text = document.getElementById("text");
let boxs = document.getElementsByClassName('box');
let gameover = document.getElementById('gameover');
let winner = document.getElementById('winner');

let reload_ = function(){
    let i = 0 ;
    let intreval = setInterval(function(){
        text.innerHTML += '.';
        i++;
        if (i==3){
            clearInterval(intreval)
            location.reload();
        }
    },800);
}
let draw = function(){
    let draw_ = 0;
    for (let i=0;i<9;i++){
        if(boxs[i].firstChild.innerHTML != ''){
            draw_ += 1 ;
        }
    }
    console.log(draw_);
    return draw_ ;
}
function sleep(win){
    setTimeout(function(){
        if(win=='O'){
            winner.innerHTML = 'O <br> Wins';
        }else if(win=='X'){
            winner.innerHTML = 'X <br> Wins';
        }else{
            winner.innerHTML = 'X && O <br> Draw !'
        }
        gameover.style.display = 'block';
        reload_();
    },400);
}

function Click(id){
    let box = document.getElementById(id);
    let h1 = box.firstChild;
    box.style.backgroundColor = 'rgb(3, 135, 43)';
    if(h1.innerHTML=='' && x_or_o == 'X'){
        h1.innerHTML = 'O'
        x_or_o = 'O';
    }
    if(h1.innerHTML=='' && x_or_o=='O'){
        h1.innerHTML = 'X';
        x_or_o = 'X';
    }

    if( (boxs[0].firstChild.innerHTML == 'X' && boxs[1].firstChild.innerHTML == 'X' && boxs[2].firstChild.innerHTML == 'X') || (boxs[3].firstChild.innerHTML == 'X' && boxs[4].firstChild.innerHTML == 'X' && boxs[5].firstChild.innerHTML == 'X') || (boxs[6].firstChild.innerHTML == 'X' && boxs[7].firstChild.innerHTML == 'X' && boxs[8].firstChild.innerHTML == 'X') || (boxs[0].firstChild.innerHTML == 'X' && boxs[3].firstChild.innerHTML == 'X' && boxs[6].firstChild.innerHTML == 'X') || (boxs[1].firstChild.innerHTML == 'X' && boxs[4].firstChild.innerHTML == 'X' && boxs[7].firstChild.innerHTML == 'X') || (boxs[2].firstChild.innerHTML == 'X' && boxs[5].firstChild.innerHTML == 'X' && boxs[8].firstChild.innerHTML == 'X') || (boxs[0].firstChild.innerHTML == 'X' && boxs[4].firstChild.innerHTML == 'X' && boxs[8].firstChild.innerHTML == 'X') || (boxs[2].firstChild.innerHTML == 'X' && boxs[4].firstChild.innerHTML == 'X' && boxs[6].firstChild.innerHTML == 'X')){
        sleep('X');
    }else if( (boxs[0].firstChild.innerHTML == 'O' && boxs[1].firstChild.innerHTML == 'O' && boxs[2].firstChild.innerHTML == 'O') || (boxs[3].firstChild.innerHTML == 'O' && boxs[4].firstChild.innerHTML == 'O' && boxs[5].firstChild.innerHTML == 'O') || (boxs[6].firstChild.innerHTML == 'O' && boxs[7].firstChild.innerHTML == 'O' && boxs[8].firstChild.innerHTML == 'O') || (boxs[0].firstChild.innerHTML == 'O' && boxs[3].firstChild.innerHTML == 'O' && boxs[6].firstChild.innerHTML == 'O') || (boxs[1].firstChild.innerHTML == 'O' && boxs[4].firstChild.innerHTML == 'O' && boxs[7].firstChild.innerHTML == 'O') || (boxs[2].firstChild.innerHTML == 'O' && boxs[5].firstChild.innerHTML == 'O' && boxs[8].firstChild.innerHTML == 'O') || (boxs[0].firstChild.innerHTML == 'O' && boxs[4].firstChild.innerHTML == 'O' && boxs[8].firstChild.innerHTML == 'O') || (boxs[2].firstChild.innerHTML == 'O' && boxs[4].firstChild.innerHTML == 'O' && boxs[6].firstChild.innerHTML == 'O')){
        sleep('O');
    }else if(draw() == 9){
        sleep('XO');
        
    }
};

