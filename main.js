let on = true;
let heading = document.getElementById("head");           
let btn = document.getElementById("flicker");

//Above 3 global variables defined to avoid redifing the variables inside multiple functions again & again


function stopFlicker() {                            // This function will stop the flicker effect 
    if (on == true) {
        btn.addEventListener("click", () => {
            heading.id = "heading";                        
            btn.innerText = "start flicker";
            on = false;
            startFlicker();
        });
    }
}

stopFlicker();

function startFlicker() {                              //Function will start the flicker effect                                           
    if (on == false) {                                                               
        btn.addEventListener("click", () => {
            heading.id = "head";
            btn.innerText = "stop flicker";
            stopFlicker();
        });
        on = true;
    }
}


function process(){
    let btn = document.querySelector(".calc-btn").addEventListener("click",(event)=>{
        event.preventDefault();
         console.log(event.target.innerText);
    });
    console.log(btn);
}

process();


function number(){

}

function symbol(){

}

function calculate(num, sym){

}



function display(){

}
