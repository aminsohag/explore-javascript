// 12 inch 1 Feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
// ignoro this one
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}
const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);

// mile to kilometer
function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const mileToKilometer1 = mileToKilometer(10);
console.log(mileToKilometer1);


// kilometer to mile
function kiloMeterToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}


