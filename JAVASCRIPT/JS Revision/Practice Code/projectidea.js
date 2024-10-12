
// TASK : If the person lives 90 years,then we have to calculate that the user 
//        is going to enter his age then we need to calculate the remaining
//        days,weeks,months he will live in this world
function lifeInWeeks() {
    var age=window.prompt("Enter Your Age To Calculated How Many Days,Weeks,Months U Will Live In This World...");

    // No. of days,weeks,months in a year
    let days=365;
    let weeks=52;
    let months=12;
        // Total no. of days,weeks,months for 90years
        let totaldays=365*90;
        let totalweeks=52*90;
        let totalmonths=12*90;
    // Totals days,weeks,months lived    
    let liveddays=age*days;
    let livedweeks=age*weeks;
    let livedmonths=age*months;

    let willlivedays=totaldays-liveddays;  
    let willliveweeks=totalweeks-livedweeks;
    let willlivemonths=totalmonths-livedmonths;

    console.log(`You have ${willlivedays} days, ${willliveweeks} weeks, and ${willlivemonths} months left.`)
    }

lifeInWeeks();