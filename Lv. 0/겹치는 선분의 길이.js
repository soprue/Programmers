function solution(lines) {
    let totalOverlappedLength = 0;
    let min = Math.min(...lines.flat());
    let max = Math.max(...lines.flat());

    function isInclude(x, [start, end]){
        x += 0.5
        if ((start < x) && (x < end)) return true;
        else return false;
    }

    for(let x = min; x < max; x++){
        let overlappedOnX = 0;
        lines.forEach((el) => {
            if(isInclude(x, el)){
                overlappedOnX += 1;
            }
        });

        if(overlappedOnX > 1){
            totalOverlappedLength += 1;
        }
    }
    
    return totalOverlappedLength;
}