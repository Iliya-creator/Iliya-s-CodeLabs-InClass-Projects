let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let isRunning = false;
let initialized = false;


function initializeStopWatch(){
    seconds.innerText = 00;
    minutes.innerText = 00;
    initialized = true;
}


function start(){
    if (isRunning){
        return;
    } else if (!isRunning && initialized){

    } else {
        
    }
    // seconds.innerText = 12;
    // minutes.innerText = 0456780;
}

function stop(){
    if (isRunning){

    } else {

    }
    // seconds.innerText = 12;
    // minutes.innerText = 0456780;
}

function resetFunc(){
    initializeStopWatch();
}



// Main


initializeStopWatch();
