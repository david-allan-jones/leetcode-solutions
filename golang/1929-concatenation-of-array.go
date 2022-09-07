package golang

func getConcatenation(nums []int) []int {
    n := len(nums)
    ans := make([]int, n*2)
    for i := 0; i < n; i++ {
        ans[i] = nums[i]
        ans[i + n] = nums[i]
    }
    return ans
}