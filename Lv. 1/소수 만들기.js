function isPrime(num) {
    for(let i=2; i<=Math.sqrt(num); i++) {  
        if (num % i === 0) return false;  
    }  
    return true;
}

function solution(nums) {
    let answer = 0;
    
    const combination = (current, start) => {
        if(current.length == 3) {
            let sum = current.reduce((acc, cur) => acc + cur, 0);
            if(isPrime(sum)) answer++;
            return;
        }
        
        for(let i=start; i<nums.length; i++) {
            combination([...current, nums[i]], i + 1);
        }
    }
    
    combination([], 0);
    
    return answer;
}