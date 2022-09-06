interface Trie {
    [key: string]: Trie | boolean
}

class WordDictionary {
    trie: Trie
    
    constructor() {
        this.trie = {}
    }

    addWord(word: string): void {
        let current = this.trie
        for (let c of word) {
            if (!current[c]) current[c] = {}
            current = current[c] as Trie
        }
        current.word = true
    }

    search(word: string): boolean {
        const subsearch = (node: Trie, s: string) => {
            let current = node
            for (let i = 0; i < s.length; i++) {
                if (s[i] === '.') {
                    for (let c in current) {
                        if (subsearch(current[c] as Trie, s.substring(i+1))) {
                            return true
                        }
                    }
                    return false
                }
                if (!current[s[i]]) {
                    return false
                }
                current = current[s[i]] as Trie
            }
            return current.word === true
        }
        return subsearch(this.trie, word)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */