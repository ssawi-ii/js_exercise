function test() {
    var a = "3";
    var b = "8";
    
    //challenge
    var temp = a;
    var a = b;
    var b = temp;

    console.log("a is " + a);
    console.log("b is " + b);
}