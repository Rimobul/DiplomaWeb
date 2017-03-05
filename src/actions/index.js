export const CURRENT_STEP = 'CURRENT_STEP';
export const SCORED_FRAMEWORKS = 'SCORED_FRAMEWORKS';
export const ADD_ANSWER = 'ADD_ANSWER';

export function nextStep(currentStep) {
    return {
        type: CURRENT_STEP,
        payload: currentStep + 1
    };
}

export function previousStep(currentStep){
    return {
        type: CURRENT_STEP,
        payload: currentStep - 1
    };
}

export function resetAnswers() {
    return {
        type: ADD_ANSWER
    };
}

export function resetSteps() {
    return {
        type: CURRENT_STEP,
        payload: 0
    };
}

export function getScore(allFrameworks, answers){
    return {
        type: SCORED_FRAMEWORKS,
        payload: {frameworks: allFrameworks, answers: answers}
    }
}

export function addAnswer(oldAnswers, newSubset){
    console.log("Adding answers", oldAnswers, newSubset);

    return {
        type: ADD_ANSWER,
        payload: {oldAnswers: oldAnswers, newSubset: newSubset}
    }
}