const getParent = i => Math.floor((i-1) / 2)
const getLeftChild = i => i*2+1
const getRightChild = i => i*2+2

const swap = (arr, i , j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

const makeMinHeap = () => {
    const arr = []
    
    const siftUp = (i) => {
        while (i > 0 && arr[i] < arr[getParent(i)]) {
            swap(arr, i, getParent(i))
            i = getParent(i)
        }
    }
    
    const siftDown = (i) => {
        while (true) {
            const leftIdx = getLeftChild(i)
            const rightIdx = getRightChild(i)
            let smallest = i
            if (leftIdx < arr.length && arr[leftIdx] < arr[smallest]) {
                smallest = leftIdx
            }
            if (rightIdx < arr.length && arr[rightIdx] < arr[smallest]) {
                smallest = rightIdx
            }
            if (smallest === i) {
                return
            }
            swap(arr, i, smallest)
            i = smallest
        }
    }
    
    return {
        add: (val) => {
            arr.push(val)
            siftUp(arr.length - 1)
        },
        peek: () => {
            return arr[0]
        },
        removeRoot: () => {
            swap(arr, 0, arr.length - 1)
            const root = arr.pop()
            siftDown(0)
            return root
        },
        size: () => arr.length,
    }
}

const makeMaxHeap = () => {
    const arr = []
    
    const siftUp = (i) => {
        while (i > 0 && arr[i] > arr[getParent(i)]) {
            swap(arr, i, getParent(i))
            i = getParent(i)
        }
    }
    
    const siftDown = (i) => {
        while (true) {
            const leftIdx = getLeftChild(i)
            const rightIdx = getRightChild(i)
            let largest = i
            if (leftIdx < arr.length && arr[leftIdx] > arr[largest]) {
                largest = leftIdx
            }
            if (rightIdx < arr.length && arr[rightIdx] > arr[largest]) {
                largest = rightIdx
            }
            if (largest === i) {
                return
            }
            swap(arr, i, largest)
            i = largest
        }
    }
    
    return {
        add: (val) => {
            arr.push(val)
            siftUp(arr.length - 1)
        },
        peek: () => {
            return arr[0]
        },
        removeRoot: () => {
            swap(arr, 0, arr.length - 1)
            const root = arr.pop()
            siftDown(0)
            return root
        },
        size: () => arr.length,
    }
}

var MedianFinder = function() {
    this.maxHeap = makeMaxHeap()
    this.minHeap = makeMinHeap()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const median = this.findMedian()
    if (this.minHeap.size() === this.maxHeap.size()) {
        if (num <= median) {
            this.maxHeap.add(num)
        } else {
            this.minHeap.add(num)
        }
        return
    }

    if (this.minHeap.size() > this.maxHeap.size()) {
        if (num <= median) {
            this.maxHeap.add(num)
        } else {
            const tmp = this.minHeap.removeRoot()
            this.maxHeap.add(tmp)
            this.minHeap.add(num)
        }
        return 
    }

    if (num <= median) {
        
        const tmp = this.maxHeap.removeRoot()
        this.minHeap.add(tmp)
        this.maxHeap.add(num)
    } else {
        this.minHeap.add(num)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const minHeapSize = this.minHeap.size()
    const maxHeapSize = this.maxHeap.size()
    if (minHeapSize === 0 && maxHeapSize === 0) return 0
    if (minHeapSize === maxHeapSize) return (this.minHeap.peek() + this.maxHeap.peek()) / 2
    if (minHeapSize > maxHeapSize) return this.minHeap.peek()
    return this.maxHeap.peek()
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */