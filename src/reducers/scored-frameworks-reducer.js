import { SCORED_FRAMEWORKS } from '../actions/index';

export default function(state = [], action){
    switch(action.type) {
        case SCORED_FRAMEWORKS:
            return action.payload.frameworks.map(framework => {
                console.log('f:', framework);
                console.log('p', action.payload);
                const score = action.payload.score.find(s => s.name === framework.name);
                console.log('s', score);
                if(score != null)
                    return Object.assign({}, framework, { score: score.points })
        });
    }

    return state;
}