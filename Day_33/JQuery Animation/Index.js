$("body").append("<h1>Bye, Anurag</h1>");

function changecolor(){
    $("h1").css("color", "white");
    setTimeout(() => {
        $("h1").css("color", "");
    }, 100);
};
$("h1").click(changecolor);

$("button").click(changecolor);