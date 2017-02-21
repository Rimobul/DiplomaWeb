import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addAnswer, getScore, previousStep} from '../../actions/index';
import Question from '../question';

class S7 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div>
                <Question
                    question="Do you want to use debugging?"
                    note="Debugging is one of the earliest tools that can help developers find and fix possible errors.
                    It allows to closely examine every line of code. For any application that has medium to high
                    complexity, debugging capability is a must.">
                    <input type="radio"
                           name="debug"
                           value="Yes"
                           checked={this.props.answers.debug}
                           onChange={() => this.props.addAnswer(this.props.answers, {debug: true})}/>Yes<br />
                    <input type="radio"
                           name="debug"
                           value="No"
                           checked={!this.props.answers.debug}
                           onChange={() => this.props.addAnswer(this.props.answers, {debug: false})}/>No<br />
                </Question>

                <Question
                    question="Do you want to unit test the app?"
                    note="Unit tests are the first tests done after (or sometimes before) a piece of code is written.
                    While not examining the system as a whole, they test each method or class individually. This helps
                    to increase the clarity and readability of code. Unit tests are then the first indicator whether
                    new or refactored code is functional and satisfies all required standards.">
                    <input type="radio"
                           name="unit"
                           value="Yes"
                           checked={this.props.answers.unit}
                           onChange={() => this.props.addAnswer(this.props.answers, {unit: true})}/>Yes<br />
                    <input type="radio"
                           name="unit"
                           value="No"
                           checked={!this.props.answers.unit}
                           onChange={() => this.props.addAnswer(this.props.answers, {unit: false})}/>No<br />
                </Question>

                <Question
                    question="Do you require automated UI testing?"
                    note="While new functionality is generally thoroughly tested manually, repeated tasks, such as
                    smoke tests or regression tests, can be automated. Automated UI tests substantially increase the
                    volume of tests performed for complex business- and enterprise-ready applications. They can be also
                    incorporated into the continuous integration process.">
                    <input type="radio"
                           name="uiTesting"
                           value="Yes"
                           checked={this.props.answers.uiTesting}
                           onChange={() => this.props.addAnswer(this.props.answers, {uiTesting: true})}/>Yes<br />
                    <input type="radio"
                           name="uiTesting"
                           value="No"
                           checked={!this.props.answers.uiTesting}
                           onChange={() => this.props.addAnswer(this.props.answers, {uiTesting: false})}/>No<br />
                </Question>

                <Question
                    question="Is app profiling necessary for the project?"
                    note="Neither unit tests, nor manual tests are able to discover low-level or long-running issues,
                    like memory leaks or taking up too much resources. If high quality and high performance are
                    important for your project, you should definitely use a tool or IDE that provides app profiling.">
                    <input type="radio"
                           name="profiling"
                           value="Yes"
                           checked={this.props.answers.profiling}
                           onChange={() => this.props.addAnswer(this.props.answers, {profiling: true})}/>Yes<br />
                    <input type="radio"
                           name="profiling"
                           value="No"
                           checked={!this.props.answers.profiling}
                           onChange={() => this.props.addAnswer(this.props.answers, {profiling: false})}/>No<br />
                </Question>

                <div>
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
        allFrameworks: state.allFrameworks,
        answers: state.answers
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    previousStep: previousStep,
    addAnswer: addAnswer,
    getScore: getScore})(S7);