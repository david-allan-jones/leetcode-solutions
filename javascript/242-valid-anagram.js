/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const a = new Array(26)
    a.fill(0, 0, 26)
    
    var p = (a, s, d) => {
        for (let i = 0; i < s.length; i++) {
            let j = s.charCodeAt(i) % 26
            a[j] = a[j] + d
        }
    }
        
    p(a, s, 1)
    p(a, t, -1)
    for (let i = 0; i < 26; i++) {
        if (a[i] !== 0) return false
    }
    return true
};