package golang

import "strconv"

func evalRPN(tokens []string) int {
	stack := []int{}
	popOperands := func() (int, int) {
		op2, op1 := stack[len(stack)-1], stack[len(stack)-2]
		stack = stack[:len(stack)-2]
		return op1, op2
	}
	for i := 0; i < len(tokens); i++ {
		tok := tokens[i]
		switch tok {
		case "+":
			op1, op2 := popOperands()
			stack = append(stack, op1+op2)
		case "-":
			op1, op2 := popOperands()
			stack = append(stack, op1-op2)
		case "*":
			op1, op2 := popOperands()
			stack = append(stack, op1*op2)
		case "/":
			op1, op2 := popOperands()
			stack = append(stack, op1/op2)
		default:
			num, _ := strconv.Atoi(tok)
			stack = append(stack, num)
		}
	}
	return stack[0]
}
