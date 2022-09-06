
var WordDictionary = function() {
    this.trie = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.trie
    for (let c of word) {
        if (!current[c]) current[c] = {}
        current = current[c]
    }
    current.word = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const subsearch = (node, s) => {
        let current = node
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '.') {
                for (let c in current) {
                    if (subsearch(current[c], s.substring(i+1))) {
                        return true
                    }
                }
                return false
            }
            if (!current[s[i]]) {
                return false
            }
            current = current[s[i]]
        }
        return current.word === true
    }
    return subsearch(this.trie, word)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */