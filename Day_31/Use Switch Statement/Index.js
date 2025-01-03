function handel() {
    var buttonclick = this.innerHTML;
    switch (buttonclick) {
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
            break;
    }
}
var numberbutton = document.querySelectorAll("button").length;
for(var i=0; i<numberbutton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handel);
}
