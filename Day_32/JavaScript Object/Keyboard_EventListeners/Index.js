function handel() {
    var buttonclick = this.innerHTML;
    makesound(buttonclick); 
}



var numberbutton = document.querySelectorAll("button").length;
for(var i=0; i<numberbutton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handel);
}

document.addEventListener("keypress", function(event){
    makesound(event.key);
})

function makesound(key){
    switch (key) {
        case "Q":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "W":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "E":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "R":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "T":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "Y":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "U":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    

        default:
            alert("Use only specific keys on display show")
            break;
    }
}