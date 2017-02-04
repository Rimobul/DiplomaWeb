import { combineReducers } from 'redux';
import CurrentStepReducer from './current-step-reducer';
import AvailableFrameworksReducer  from './available-frameworks-reducer';
import FilteredFrameworksReducer from './filtered-frameworks-reducer';

const rootReducer = combineReducers({
    allFrameworks: AvailableFrameworksReducer,
    filteredFrameworks: FilteredFrameworksReducer,
    currentStep: CurrentStepReducer
});

export default rootReducer;
