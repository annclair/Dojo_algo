'use strict';
module.exports = function toString(number) {
    //Your code here
    let unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dizain = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number < 20)
        return unit[number];
    else if (number %10 == 0)
        return dizain[number/10];
    else
        return dizain[Math.round(number/10)] +' ' + unit[number %10]






}
