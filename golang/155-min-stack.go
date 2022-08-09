package golang

type MinStack struct {
	stack    []int
	minStack []int
}

func Constructor() MinStack {
	return MinStack{make([]int, 0), make([]int, 0)}
}

func (this *MinStack) Push(val int) {
	(*this).stack = append((*this).stack, val)
	length := len((*this).minStack)
	if length == 0 || val <= (*this).minStack[length-1] {
		(*this).minStack = append((*this).minStack, val)
	}
}

func (this *MinStack) Pop() {
	topIndex := len((*this).stack) - 1
	val := (*this).stack[topIndex]
	(*this).stack = (*this).stack[:topIndex]

	minTopIndex := len((*this).minStack) - 1
	min := (*this).minStack[minTopIndex]
	if val == min {
		(*this).minStack = (*this).minStack[:minTopIndex]
	}
}

func (this *MinStack) Top() int {
	return (*this).stack[len((*this).stack)-1]
}

func (this *MinStack) GetMin() int {
	return (*this).minStack[len((*this).minStack)-1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */
