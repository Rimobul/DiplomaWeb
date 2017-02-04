import { combineReducers } from 'redux';
import CurrentStepReducer from './current-step-reducer';

const rootReducer = combineReducers({
    currentStep: CurrentStepReducer
});

export default rootReducer;
