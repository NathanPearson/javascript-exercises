const removeFromArray = function() {
    let args = Array.from(arguments);
    let res = args.shift();
        
    res = res.filter(item => !args.includes(item));

    return res;
}

module.exports = removeFromArray
