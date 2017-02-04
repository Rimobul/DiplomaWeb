export const CURRENT_STEP = 'CURRENT_STEP';
export const ALL_FRAMEWORKS = 'ALL_FRAMEWORKS';

export function nextStep(currentStep) {
    return {
        type: CURRENT_STEP,
        payload: currentStep + 1
    };
}