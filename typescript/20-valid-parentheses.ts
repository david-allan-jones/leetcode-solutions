function isValid(s: string): boolean {
    let a = [];
    let p = {'(': ')','{': '}','[': ']'};
    for (let i=0; i < s.length; i++) {
        if (p[s[i]]) {
            a.push(p[s[i]]);
        } else {
            if (a.pop() !== s[i]) return false;
        }
    }
    return a.length === 0;
};