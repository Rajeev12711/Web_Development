function bmi(weight, height){
    var bmicalcu = weight / (Math.pow(height, 2));
    if (bmicalcu < 18.5) {
        return "Your BMI is " + bmicalcu +  ", so you are underweight."
    } else if (bmicalcu > 18.5 && bmicalcu <= 24.9) {
        return  "Your BMI is " + bmicalcu +  ", so you have a normal weight."
    } else {
        return  "Your BMI is " + bmicalcu +  ", so you are overweight."
    }
}

console.log(bmi(50, 1.70));
