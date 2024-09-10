function life(age){
    var leftlife= 75 -age;
    var daysleft = 356 * leftlife;
    var weekleft = 52 * leftlife;
    var monthleft = 12 * leftlife;
    console.log("You have", + daysleft + " days,", + weekleft + " weeks, and", +  monthleft + " months left.");
}
life(prompt("What is your age? \n"));