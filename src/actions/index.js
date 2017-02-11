export const CURRENT_STEP = 'CURRENT_STEP';
//export const FILTER_FRAMEWORKS = 'FILTER_FRAMEWORKS';
export const SCORED_FRAMEWORKS = 'SCORED_FRAMEWORKS';
export const ADD_ANSWER = 'ADD_ANSWER';

export function nextStep(currentStep) {
    return {
        type: CURRENT_STEP,
        payload: currentStep + 1
    };
}

export function resetSteps() {
    return {
        type: CURRENT_STEP,
        payload: 0
    };
}

// export function filterFrameworks(filteredArray) {
//     return {
//         type: FILTER_FRAMEWORKS,
//         payload: filteredArray
//     }
// }

export function addScore(frameworks, score) {
    //console.log("Adding score", frameworks, score);

    return {
        type: SCORED_FRAMEWORKS,
        payload: { frameworks: frameworks, score: score}
    }
}

export function addAnswer(oldAnswers, newSubset){
    console.log("Adding answers", oldAnswers, newSubset);

    return {
        type: ADD_ANSWER,
        payload: {oldAnswers: oldAnswers, newSubset: newSubset}
    }
}