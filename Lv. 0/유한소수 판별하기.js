function getGCD(a, b) {
    return (a % b == 0) ? b : getGCD(b, a % b);
}

function solution(a, b) {
    if(a % b == 0) return 1;
    
    let answer = 1;
    
    let gcd = getGCD(a, b);
    let botNum = b / gcd;
    
    let primeNum = [];
    for(let i=2; i<=botNum; i++) {
        while(botNum % i == 0) {
            botNum = botNum / i;
            primeNum.push(i);
        }
    }
    
    return primeNum.filter((v) => v != 2 && v != 5).length > 0 ? 2 : 1;
}