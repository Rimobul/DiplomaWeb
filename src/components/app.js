import React, {Component} from 'react';
import {connect} from 'react-redux';
import S0 from './steps/s0';
import S1 from './steps/s1';

class App extends Component {
    render() {
        switch(this.props.currentStep){
            case 0:
                return <S0 />;
            case 1:
                return <S1 />;
        };
    }
}

function mapStateToProps(state) {
    return {
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps)(App);
