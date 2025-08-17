function isLeap(year) {
    var leapYear = year;
    if (leapYear%400 === 0){
        return leapYear = "Leap year.";
    } 
    else if (leapYear%100 === 0){
        return leapYear = "Not leap year.";
    } 
    else if (leapYear%4 === 0){
        return leapYear = "Leap Year.";
    } 
    else {
        return leapYear = "Not leap year."
    }
}
isLeap(2400);