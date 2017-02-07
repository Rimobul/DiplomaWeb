import { SCORED_FRAMEWORKS } from '../actions/index';

export default function(state = [], action){
    switch(action.type) {
        case SCORED_FRAMEWORKS:
            return action.payload.frameworks.map(framework => {
                const score = action.payload.score.find(s => s.name === framework.name);
                if(score != null)
                    return Object.assign({}, framework, { score: framework.score + score.points })
        });
    }

    return state;
}