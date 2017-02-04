import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, filterFrameworks} from '../../actions/index';

class S2 extends Component {
    render(){
        console.log(this.props.filteredFrameworks);

        return(
            <div>
                S2
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allFrameworks: state.allFrameworks,
        filteredFrameworks: state.filteredFrameworks,
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, { nextStep: nextStep, filterFrameworks: filterFrameworks })(S2);
