export const CURRENT_STEP = 'CURRENT_STEP';
export const FILTER_FRAMEWORKS = 'FILTER_FRAMEWORKS';

export function nextStep(currentStep) {
    return {
        type: CURRENT_STEP,
        payload: currentStep + 1
    };
}

export function filterFrameworks(filteredArray) {
    return {
        type: FILTER_FRAMEWORKS,
        payload: filteredArray
    }
}