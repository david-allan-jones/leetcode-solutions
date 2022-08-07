
var Trie = function() {
    this.tree = {}
    return this
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let pointer = this.tree
    for (let i = 0; i < word.length; i++) {
        if (pointer[word[i]] === undefined) {
            pointer[word[i]] = {}
        }
        pointer = pointer[word[i]]
    }
    pointer.terminal = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let pointer = this.tree
    for (let i = 0; i < word.length; i++) {
        if (pointer[word[i]] === undefined) return false
        pointer = pointer[word[i]]
    }
    return pointer.terminal === true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let pointer = this.tree
    for (let i = 0; i < prefix.length; i++) {
        if (pointer[prefix[i]] === undefined) return false
        pointer = pointer[prefix[i]]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */