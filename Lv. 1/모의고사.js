function solution(answers) {
    let answer = [];
    
    let one = [1, 2, 3, 4, 5];
    let oneLength = one.length;
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let twoLength = two.length;
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let threeLength = three.length;
    
    let correct = [0, 0, 0];
    
    for(let i=0; i<answers.length; i++) {
        if (answers[i] === one[i % oneLength]) correct[0] += 1;
        if (answers[i] === two[i % twoLength]) correct[1] += 1;
        if (answers[i] === three[i % threeLength]) correct[2] += 1;
    }

    let maxScore = Math.max(...correct);
    for (let i = 0; i < 3; i++) {
        if (correct[i] === maxScore) answer.push(i + 1);
    }

    return answer;
}