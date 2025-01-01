function handel() {
    alert("I got Clicked!.");
}
var numberbutton = document.querySelectorAll("button").length;
for(var i=0; i<numberbutton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handel);
}
