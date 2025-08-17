function whoPaying(names) {
    var name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var x = name.length;
    var y = Math.floor(Math.random()*x);
    var person = name[y];
    return person + " is going to buy lunch today!";
}
whoPaying();