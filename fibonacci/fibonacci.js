const fibonacci = function(num) {
    let a = 1; b = 1; temp = 0;
    num = parseInt(num, 10);
    if (num < 1)
        return 'OOPS';
    if (num < 2)
        return 1;
    for (i=0; i < num - 2; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

module.exports = fibonacci
