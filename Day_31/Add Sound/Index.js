function handel() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    this.style.color= "white";
}
var numberbutton = document.querySelectorAll("button").length;
for(var i=0; i<numberbutton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handel);
}
