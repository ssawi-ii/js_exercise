var n = 99;
var march = [];
function beer() {
    var x = n--;
    while (x >= 0) {
        if (x <= 99 && x > 1){
            march.push(x +" bottles of beer on the wall, " + x + " bottles of beer. Take one down and pass it around, " + (x-1) + " bottles of beer on the wall.");
        } else if (x === 1) {
            march.push(x + " bottle of beer on the wall, "+ x +" bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
        } else {
            march.push(" No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        x--;
    }
    console.log(march);
}
beer();