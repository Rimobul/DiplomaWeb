export function isNullOrTrue(item){
    return item === null || item === true;
}

export function evaluatePoints(implementation, score){
    if(implementation == null){
        return 0;
    } else if (implementation === true) {
        return score;
    } else {
        return -score;
    }
}