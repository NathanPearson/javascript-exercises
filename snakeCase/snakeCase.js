const snakeCase = function(str) {
    let newStr = str.replace(/[^A-z]/g, ' ');
    if(newStr.indexOf(' ') < 0) {
        newStr = newStr.replace(/([A-Z])/g, ' $1');    
    }
    return newStr.trim().toLowerCase().replace(/\s+/g, '_');
}

module.exports = snakeCase
