import { combineReducers } from 'redux';
import CurrentStepReducer from './current-step-reducer';
import AvailableFrameworksReducer  from './available-frameworks-reducer';
import ScoredFrameworksReducer from './scored-frameworks-reducer';
import AnswersReducer from './answers-reducer';

const rootReducer = combineReducers({
    allFrameworks: AvailableFrameworksReducer,
    currentStep: CurrentStepReducer,
    scoredFrameworks: ScoredFrameworksReducer,
    answers: AnswersReducer
});

export default rootReducer;
