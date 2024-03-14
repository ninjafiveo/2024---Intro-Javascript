window.onload = function(){
// alert("Ninja")

document.getElementById("main_title").innerHTML = "Dominate the DOM";

document.getElementById("main_body").style = "background-color: #1eeaaa"

document.getElementById("main_title").style = "background-color: #000; color: #abdbe3; padding: 20px;"

document.getElementById("first_paragraph").innerHTML = "whatevs";
}

let the_count = 0;

function clicker(){
    // alert("ninja")
    the_count++;
    document.getElementById("counter").innerHTML = the_count;

    if(the_count >= 20){
        alert("I can't count any higher.")
        the_count = 0;
    }

    }