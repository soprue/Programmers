function solution(nums) {
    const numLen = nums.length;
    const setLen = new Set(nums).size;
    return numLen / 2 >= setLen ? setLen : numLen / 2;
}