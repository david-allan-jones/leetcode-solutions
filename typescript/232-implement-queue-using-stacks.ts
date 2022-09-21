
var MyQueue = function() {
    this.mainStack = []
    this.processingStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.mainStack.length) {
        this.processingStack.push(this.mainStack.pop())
    }
    this.mainStack.push(x)
    while (this.processingStack.length) {
        this.mainStack.push(this.processingStack.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.mainStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.mainStack[this.mainStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.mainStack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */