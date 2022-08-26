function longestCommonPrefix(strs: string[]): string {
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