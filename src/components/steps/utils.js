export function isNullOrTrue(item){
    return item === null || item === true;
}

export function isEqualOrMore(threshold, actual, points){
    if(actual < threshold){
        return -points;
    } else if (actual === threshold){
        return points;
    } else return 0;
}

// export function evaluatePoints(implementation, score){
//     if(implementation == null){
//         return 0;
//     } else if (implementation === true) {
//         return score;
//     } else {
//         return -score;
//     }
// }

export function answersMatrixValue(expected, actual, points){
    if(expected == false || actual == null){
        return 0;
    }

    if(expected == null){
        if(actual == true){
            return points;
        } else if (points > 5) {
            return -points;
        } else {
            return 0;
        }
    }

    if(expected == true){
        return actual == true ? points : -points;
    }
}