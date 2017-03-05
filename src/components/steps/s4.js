import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, resetSteps, previousStep, resetAnswers} from '../../actions/index';
import ReportWrapper from '../reports/report-wrapper';

class S4 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render(){
        console.log("S4", this.props);
        return (
            <div>
                <div className="row">
                    {this.props.scoredFrameworks.map(framework =>
                        <ReportWrapper framework={framework} answers={this.props.answers} key={framework.name} />
                    )}
                </div>

                <div>
                    <button
                        className="btn btn-default"
                        onClick={() => {
                            this.props.resetAnswers();
                            this.props.resetSteps();
                        }}>
                        Back to main page
                    </button>
                    <button
                        className="btn btn-info">
                        Download PDF
                    </button>
                    <button
                        className="btn btn-info"
                        onClick={() => {
                            this.props.previousStep(this.props.currentStep)
                        }}>
                        Back
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            this.props.nextStep(this.props.currentStep)
                        }}>
                        Next
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        answers: state.answers,
        scoredFrameworks: state.scoredFrameworks,
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    previousStep: previousStep,
    resetSteps: resetSteps,
    resetAnswers: resetAnswers})(S4);