const palindromes = function(str) {
    var reg = /[\W]+/g;
    str = str.toLowerCase().replace(reg, '');    
    j = str.length - 1;    
    for(i=0;i <= j;i++){    
        if(str.charAt(i) != str.charAt(j)) return false;
        --j;
    }
    return true;
}

module.exports = palindromes
