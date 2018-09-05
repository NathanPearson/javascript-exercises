const sumAll = function(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    } else if (a < 0 || b < 0) {
        return 'ERROR';
    } else {
        let sum = 0;
        let temp;

        if(a > b) {
            temp = b;
            b = a;
            a = temp;
        }
        while (a <= b) {
            sum += a;
            a++;
        }
        return sum;
    }
}

module.exports = sumAll
