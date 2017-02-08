export function isNullOrTrue(item){
    return item === null || item === true;
}

export function isMoreOrEqual(threshold, actual, points){
    if(actual < threshold){
        return -points;
    } else if (actual === threshold){
        return 0
    } else return points;
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