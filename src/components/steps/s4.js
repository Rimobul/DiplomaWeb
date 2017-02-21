import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, resetSteps, previousStep} from '../../actions/index';

class S4 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    getMobileOsDescription(platforms){
        const result = [];
        if(platforms.android[0]){
            result.push("Android");
        }
        if(platforms.blackBerry[0]){
            result.push("BlackBerry");
        }
        if(platforms.ios[0]){
            result.push("iOS");
        }
        if(platforms.windows[0]){
            result.push("Windows");
        }
        return result.join(", ");
    }

    getMobileOsComments(platforms){
        const result = [];
        if(platforms.android.length > 1){
            result.push(platforms.android[1]);
        }
        if(platforms.blackBerry.length > 1){
            result.push(platforms.blackBerry[1]);
        }
        if(platforms.ios.length > 1){
            result.push(platforms.ios[1]);
        }
        if(platforms.windows.length > 1){
            result.push(platforms.windows[1]);
        }
        return result.join(" ");
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
                        <br/>
                        <h3>Score: {framework.score}</h3>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Supported mobile platforms</td>
                                <td>{this.getMobileOsDescription(framework.mobileOs)}</td>
                                <td>{this.getMobileOsComments(framework.mobileOs)}</td>
                            </tr>
                        </tbody>
                    </table>
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
        scoredFrameworks: state.scoredFrameworks,
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    previousStep: previousStep,
    resetSteps: resetSteps})(S4);