function whosPaying(names) {
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var indx = names.length;
    var rand = Math.random() * indx;
    var num = Math.floor(rand);
    var output = names[num];
    
    return  output + " is going to buy lunch today!";
    
}
