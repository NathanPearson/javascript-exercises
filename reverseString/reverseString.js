const reverseString = function(str) {
    let res = ''
    for(i=(str.length-1);i>=0;i--) {
        res += str.charAt(i);
    }
    return res;
}

module.exports = reverseString
