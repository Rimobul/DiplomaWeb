export const NEXT_STEP = 'NEXT_STEP';

export function nextStep(currentStep) {
    return {
        type: NEXT_STEP,
        payload: currentStep + 1
    }
}