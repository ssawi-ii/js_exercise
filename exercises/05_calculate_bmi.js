function bmiCalculator (weight, height) {
    var bmi = weight/Math.pow(height, 2);
    var bmiRound =Math.round(bmi);
    return bmiRound;
}
bmiCalculator(52, 1.65);