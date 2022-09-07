function minPartitions(n: string): number {
    let result = 0
    for (let i = 0; i < n.length; i++) {
        result = Math.max(result, parseInt(n[i]))
    }
    return result
};