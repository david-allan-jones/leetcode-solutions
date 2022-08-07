/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    
    let i = 0, p = '';
    while (true) {
        let c = strs[0][i];
        if (c === undefined) return p;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== c) return p;
        }
        p = p+c;
        i = i+1;
    }
};