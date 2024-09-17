function bottles(){
    
    var count = 99;
    
    while (count != 0) {
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
        console.log("Take one down and pass it around, " + (count-1) + " bottles of beer on the wall. \n");
        count--;
    } 
    
}
bottles();

