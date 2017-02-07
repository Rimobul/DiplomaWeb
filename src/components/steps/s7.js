import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addScore} from '../../actions/index';
import {evaluatePoints} from './utils';
import Question from '../question';

class S7 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            debug: false,
            unit: false,
            uiTesting: false,
            profiling: false
        }
    }

    getScoreArray(){
        const scoreArray = this.props.scoredFrameworks.map(f => {
            let points = 0;
            if(this.state.debug){
                points += evaluatePoints(f.testing.debugging[0], 5);
            }
            if(this.state.unit){
                points += evaluatePoints(f.testing.unitTest[0], 5);
            }
            if(this.state.uiTesting){
                points += evaluatePoints(f.testing.uiTest[0], 5);
            }
            if(this.state.profiling){
                points += evaluatePoints(f.testing.appProfiling[0], 5);
            }
            return {name: f.name, points: points};
        });

        return scoreArray;
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
                           checked={this.state.debug}
                           onChange={() => this.setState({debug: true})}/>Yes<br />
                    <input type="radio"
                           name="debug"
                           value="No"
                           checked={!this.state.debug}
                           onChange={() => this.setState({debug: false})}/>No<br />
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
                           checked={this.state.unit}
                           onChange={() => this.setState({unit: true})}/>Yes<br />
                    <input type="radio"
                           name="unit"
                           value="No"
                           checked={!this.state.unit}
                           onChange={() => this.setState({unit: false})}/>No<br />
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
                           checked={this.state.uiTesting}
                           onChange={() => this.setState({uiTesting: true})}/>Yes<br />
                    <input type="radio"
                           name="uiTesting"
                           value="No"
                           checked={!this.state.uiTesting}
                           onChange={() => this.setState({uiTesting: false})}/>No<br />
                </Question>

                <Question
                    question="Is app profiling necessary for the project?"
                    note="Neither unit tests, nor manual tests are able to discover low-level or long-running issues,
                    like memory leaks or taking up too much resources. If high quality and high performance are
                    important for your project, you should definitely use a tool or IDE that provides app profiling.">
                    <input type="radio"
                           name="profiling"
                           value="Yes"
                           checked={this.state.profiling}
                           onChange={() => this.setState({profiling: true})}/>Yes<br />
                    <input type="radio"
                           name="profiling"
                           value="No"
                           checked={!this.state.profiling}
                           onChange={() => this.setState({profiling: false})}/>No<br />
                </Question>

                <div>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            this.props.addScore(this.props.scoredFrameworks, this.getScoreArray());
                            this.props.nextStep(this.props.currentStep)
                        }}>
                        Continue
                        <span className="glyphicon glyphicon-play"/>
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

export default connect(mapStateToProps, { nextStep: nextStep, addScore: addScore })(S7);