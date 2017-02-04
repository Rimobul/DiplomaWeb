import { CURRENT_STEP } from '../actions/index';

export default function(state = 0, action){
    switch(action.type) {
        case CURRENT_STEP:
            return action.payload;
    }

    return state;
}