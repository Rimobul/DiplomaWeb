import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, resetSteps, previousStep} from '../../actions/index';

class S12 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    renderFramework(framework){
        return(
            <div className="col-md-4" key={framework.name}>
                <div className="thumbnail">
                    <a href={framework.web} >
                        <div className="box-logo">
                            <img src={framework.image} alt={framework.name} />
                        </div>
                    </a>
                    <div className="caption">
                        <h2>{framework.name}</h2>
                        <br />
                        <h3>Score {framework.score}</h3>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div>
                <div className="row">
                    {this.props.scoredFrameworks.map(framework => this.renderFramework(framework))}
                </div>

                <div>
                    <button
                        className="btn btn-default"
                        onClick={() => this.props.resetSteps()}>
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
        currentStep: state.currentStep,
        scoredFrameworks: state.scoredFrameworks
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    previousStep: previousStep,
    resetSteps: resetSteps })(S12);