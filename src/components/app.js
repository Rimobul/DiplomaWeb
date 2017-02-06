import React, {Component} from 'react';
import {connect} from 'react-redux';
import S0 from './steps/s0';
import S1 from './steps/s1';
import S2 from './steps/s2';
import S3 from './steps/s3';
import S4 from './steps/s4';
import S5 from './steps/s5';
import S6 from './steps/s6';

class App extends Component {
    render() {
        switch(this.props.currentStep){
            case 0:
                return <S0 />;
            case 1:
                return <S1 />;
            case 2:
                return <S2 />;
            case 3:
                return <S3 />;
            case 4:
                return <S4 />;
            case 5:
                return <S5 />;
            case 6:
                return <S6 />;
        };
    }
}

function mapStateToProps(state) {
    return {
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps)(App);
