package golang

func minPartitions(n string) int {
    digits := len(n)
    result := 0
    for i := 0; i < digits; i++ {
        d := int(n[i] - '0')
        if d > result {
            result = d
        }
    }
    return result
}