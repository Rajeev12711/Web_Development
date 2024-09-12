function bmi(weight, height){
    var bmicalcu = weight / (Math.pow(height, 2));
    
    return Math.floor(bmicalcu);
}
var weight = prompt("enter enter the weight");
var height = prompt("enter enter the height");
console.log("Your bmi is " + bmi(weight, height));
