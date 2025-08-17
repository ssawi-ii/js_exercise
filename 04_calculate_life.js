function lifeInWeeks(age) {
    lifeCurrent = 90-age; //กำหนดให้อายุมากสุดคือ 90 ปี
    lifeDays = 365*lifeCurrent;
    lifeWeeks = 52*lifeCurrent;
    lifeMonths = 12*lifeCurrent;
    console.log("Your life have left " + lifeCurrent + " years old, " + lifeDays + " days, " + lifeWeeks + " weeks and " + lifeMonths + " months.");
}
lifeInWeeks(22);