function solution(quiz) {
    let answer = [];
    for(let x of quiz) {
        let str = x.split("=");
        let func = new Function("return " + str[0]);
        answer.push(func() == str[1] ? "O" : "X");
    }
    return answer;
}