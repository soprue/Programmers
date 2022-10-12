function solution(n) {
    const gcdFunc = (a, b) => a % b == 0 ? b : gcdFunc(b, a % b);
    let gcd = gcdFunc(n, 6);
    let lcm = n * 6 / gcd;
    return lcm / 6;
}