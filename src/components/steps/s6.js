import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addScore} from '../../actions/index';

class S6 extends Component {
    render(){
        console.log(this.props.scoredFrameworks);

        return(
            <div>
                S6
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentStep: state.currentStep,
        scoredFrameworks: state.scoredFrameworks
    }
}

export default connect(mapStateToProps, { nextStep: nextStep, addScore: addScore })(S6);