function fibonacciGenerator (n) {
var output = [];
    
    if (n === 1) {
        output.push(0);
    }
    else if (n >= 2) {
        output.push(0,1); 
        var r = output.length;
        while (r < n) {
            var x = output[output.length-2] + output[output.length-1];
            output.push(x);
            r++;
        }
    }
    return output;
}
fibonacciGenerator(5);