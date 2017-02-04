export const CURRENT_STEP = 'CURRENT_STEP';

export function nextStep(currentStep) {
    return {
        type: CURRENT_STEP,
        payload: currentStep + 1
    };
}