function isPowerOfTwo(n: number): boolean {
    //since n is an integer, don't worry about negative powers like 0.5, 0.25, etc
    if (n <= 0) return false
    return (n & (n-1)) === 0
};