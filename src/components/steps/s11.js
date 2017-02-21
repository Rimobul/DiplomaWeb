import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addAnswer, getScore, previousStep} from '../../actions/index';
import Question from '../question';

class S11 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>
                <Question
                    question="Is OpenGL or WebGL required?"
                    note="There are some applications that may find use in hardware-accelerated 3D graphics. A model
                    catalogue, design studio or a game are some examples of this kind of apps. Rendering and managing a
                    3D object requires the use of OpenGL library specialized for mobile or web environment. Most tools
                    support the integration of either OpenGL ES or WebGL. However, Aquro, Instant Developer, Smartface
                    and ViziApps are exceptions to this rule.">
                    <input type="radio"
                           name="openGl"
                           value="Yes"
                           checked={this.props.answers.openGl}
                           onChange={() => this.props.addAnswer(this.props.answers, {openGl: true})}/>Yes<br />
                    <input type="radio"
                           name="openGl"
                           value="No"
                           checked={!this.props.answers.openGl}
                           onChange={() => this.props.addAnswer(this.props.answers, {openGl: false})}/>No<br />
                </Question>

                <Question
                    question="Is the support for creating 2D games necessary?"
                    note="Although for a full-featured game development a mobile game framework would be more suitable,
                    some multi-platform development tools are mature enough to host a simple 2D game. Examples of them
                    can be Corona Labs, Kivy, Qt or Xamarin.">
                    <input type="radio"
                           name="games"
                           value="Yes"
                           checked={this.props.answers.games}
                           onChange={() => this.props.addAnswer(this.props.answers, {games: true})}/>Yes<br />
                    <input type="radio"
                           name="games"
                           value="No"
                           checked={!this.props.answers.games}
                           onChange={() => this.props.addAnswer(this.props.answers, {games: false})}/>No<br />
                </Question>

                <Question
                    question="Will the project include augmented or virtual reality?"
                    note="Although augmented and virtual reality applications are dominated by games, various utility
                    and even business apps are getting still more popular as well. Implementing one of these
                    technologies might be exactly the thing that will set your app apart from the competition.">
                    <input type="radio"
                           name="avr"
                           value="Yes"
                           checked={this.props.answers.avr}
                           onChange={() => this.props.addAnswer(this.props.answers, {avr: true})}/>Yes<br />
                    <input type="radio"
                           name="avr"
                           value="No"
                           checked={!this.props.answers.avr}
                           onChange={() => this.props.addAnswer(this.props.answers, {avr: false})}/>No<br />
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
    getScore: getScore})(S11);