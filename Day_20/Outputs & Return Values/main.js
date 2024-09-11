function getMilk(money, cost) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("Buy " + bottles(money, cost) + " bottle of milk");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return change(money, cost);
}
function bottles(money, cost){
    var numberbottles = Math.floor(money / cost);
    return numberbottles;
}
function change(amount, cost){
    var returnchange = amount % cost;
    return returnchange;
}

console.log("Hello sir, here is your " + getMilk(11, 3) + " doller change" );
