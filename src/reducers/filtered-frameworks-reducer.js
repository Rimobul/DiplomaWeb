import { FILTER_FRAMEWORKS } from '../actions/index';

export default function(state = [], action){
    switch(action.type) {
        case FILTER_FRAMEWORKS:
            return action.payload;
    }

    return state;
}