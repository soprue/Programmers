function solution(dots) {
    const leans = []

    for(let i = 0; i < dots.length; i++) {
        const dotA = dots[i];
        for(let j = i + 1; j < dots.length; j++) {
            const dotB = dots[j]
            const lean = (dotB[1] - dotA[1])  / (dotB[0] - dotA[0]); // 직선 기울기 구하는 공식

            if(leans.includes(lean)) return 1;
            else leans.push(lean);
        }
    }

    return 0;
}