function isPositive(number) {
    return number > 0;
}

function isNegative(number) {
    return number < 0;
}

function isZero(number) {
    return number === 0;
}

function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else if (number % 2 !== 0) {
        return false
    }
}

function describeNumber(number) {
   return number = {
       positive: isPositive(number),
       negative: isNegative(number),
       zero: isZero(number),
       even: isEven(number),
       odd: !isEven(number),
   }
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));