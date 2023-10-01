package golang

type temp struct {
	Val int
	Idx int
}

func dailyTemperatures(temperatures []int) []int {
	result := []int{}
	stack := []temp{}

	for i := 0; i < len(temperatures); i++ {
		result = append(result, 0)
		for len(stack) > 0 && temperatures[i] > stack[len(stack)-1].Val {
			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			result[top.Idx] = i - top.Idx
		}
		stack = append(stack, temp{Val: temperatures[i], Idx: i})
	}
	return result
}
