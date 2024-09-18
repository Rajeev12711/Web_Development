function bottles(){
    
    var count = 99;
    var beerbottle = "bottles";

    
    while (count >= 0) {
        
        console.log(count + " " + beerbottle +  " of beer on the wall, " + count + " " + beerbottle + " of beer.");
        if (count === 2) {
            beerbottle = "bottle";
        }else if (count === 1){
            
            count--;
            count = "No more";
            console.log("Take one down and pass it around, " + count + " " + beerbottle + " of beer on the wall. \n");

            console.log(count + " " + beerbottle + " of beer on the wall, " + count + " " + beerbottle + " of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

            break;
        } 
        
        count--;
        console.log("Take one down and pass it around, " + count + " " + beerbottle + " of beer on the wall. \n");       
    }
}
bottles();
