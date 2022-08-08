
package golang

func canJump(nums []int) bool {
    needed := 0
    for i := len(nums)-2; i >= 0; i-- {
        needed = needed + 1
        if nums[i] >= needed {
            needed = 0
        }
    }
    return needed == 0
}