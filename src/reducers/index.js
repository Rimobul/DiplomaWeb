import { combineReducers } from 'redux';
import CurrentStepReducer from './current-step-reducer';
import AvailableFrameworksReducer  from './available-frameworks-reducer';

const rootReducer = combineReducers({
    allFrameworks: AvailableFrameworksReducer,
    currentStep: CurrentStepReducer
});

export default rootReducer;
