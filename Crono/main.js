let second_ = document.getElementById("second_");
let second = document.getElementById("second");
let minut = document.getElementById("minut");

let valuesecond_ = document.getElementById("second_value");
let valuesecond = document.getElementById("secondvalue");
let valueminut = document.getElementById("minutvalue");
let valuehour = document.getElementById("hourvalue");

let start = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let reset = document.getElementById("reset");

function starttime(){

    valuesecond_.value = +valuesecond_.value + 1;
    if(valuesecond.value.length==1){
        valuesecond.value = '0'+ valuesecond.value
    }
    
    if(valueminut.value.length==1){
        valueminut.value = '0'+ valueminut.value
    }
    
    if(valuehour.value.length==1){
        valuehour.value = '0'+ valuehour.value
    }

    
    if(+valuesecond_.value % 100 == 0 ){
        valuesecond.value = +valuesecond.value + 1;
        valuesecond_.value = '00';

        if(+valuesecond.value % 60 == 0 ){
            valueminut.value = +valueminut.value + 1;
            valuesecond.value = '00';

            if(+valueminut.value % 60 == 0 ){
                valuehour.value = +valuehour.value + 1;
                valueminut.value = '00';
            }
        }
    }
};


start.onclick = function(){
    start.style.pointerEvents='none';
    //start.classList.add("clicked");
    starttimeintrvel = setInterval(() => {
        starttime();
    }, 10.40);;
}

stopbtn.onclick = function(){
    clearInterval(starttimeintrvel);
    start.style.pointerEvents = 'all';
    //start.classList.remove("clicked");
}

reset.onclick = ()=>{
    location.reload();
}