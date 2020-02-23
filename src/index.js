module.exports = function toReadable (number) {
    let simpleNumbers = [
        'zero', 'one', 'two', 'three', 'four', 'five','six','seven','eight', 'nine', 
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let decimals = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let stringNumber = number.toString();

    if(number < 20) {
        return simpleNumbers[number];
    }

    if(number < 100) {
        return number % 10 !== 0
                ? decimals[Math.trunc(number / 10)] + ' ' + simpleNumbers[number % 10]
                : decimals[Math.trunc(number / 10)];
    }

    if(number < 1000) {
        let hundreds = Math.trunc(number / 100);
        let dozens = Math.trunc(number % 100 / 10);
        let units = number % 10;

        if(dozens === 0) {
            return `${simpleNumbers[hundreds]} hundred${units === 0 ? '' : ' ' + simpleNumbers[units]}`;
        } else if(dozens === 1) {
            return `${simpleNumbers[hundreds]} hundred ${simpleNumbers[units + 10]}`;
        } else {
            return `${simpleNumbers[hundreds]} hundred ${decimals[dozens]}${units === 0 ? '' : ' ' + simpleNumbers[units]}`;
        }
    }

    return 'Too big :(';
}
