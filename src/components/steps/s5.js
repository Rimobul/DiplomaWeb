import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addAnswer, previousStep} from '../../actions/index';
import Question from '../question';

class S5 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Question
                    question="How would you characterize the complexity of your app?"
                    note="Complexity of the application can help to determine which tool and programming language to
                    choose. Simple, straight-forward applications can take advantage of the rapid prototyping provided
                    by hybrid mobile applications and tools using scripting languages. Larger and more complex projects
                    should be programmed in a strongly-typed programming language featuring object-oriented programming
                    and separation of code into modules.">
                    <input type="radio"
                           name="complex"
                           value="0"
                           checked={this.props.answers.complex == 0}
                           onChange={() => this.props.addAnswer(this.props.answers, {complex: 0})}/>
                    Prototype-like (Simple app / Focused on quick development)<br />
                    <input type="radio"
                           name="complex"
                           value="1"
                           checked={this.props.answers.complex == 1}
                           onChange={() => this.props.addAnswer(this.props.answers, {complex: 1})}/>
                    Business-grade (Complex app tightly focused on a single API or functionality)<br />
                    <input type="radio"
                           name="complex"
                           value="2"
                           checked={this.props.answers.complex == 2}
                           onChange={() => this.props.addAnswer(this.props.answers, {complex: 2})}/>
                    Native-like (Complex app with: intensive calculations / complicated graphics and animations /
                    heavy use of multiple sensors or APIs)<br />
                </Question>

                <Question
                    question="Do you require a designer or previewer tool?"
                    note="A design or preview tool allows to see the changes in UI code immediately on a simulated
                    mobile device screen. Some allow also WYSIWYG editing. This can highly improve the communication
                    between a designer, product owner and the developer. It can be also very helpful in rapid
                    prototyping and agile development.">
                    <input type="radio"
                           name="designer"
                           value="Yes"
                           checked={this.props.answers.designer}
                           onChange={() => this.props.addAnswer(this.props.answers, {designer: true})}/>Yes<br />
                    <input type="radio"
                           name="designer"
                           value="Maybe"
                           checked={this.props.answers.designer == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {designer: null})}/>Nice to have<br />
                    <input type="radio"
                           name="designer"
                           value="No"
                           checked={this.props.answers.designer == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {designer: false})}/>No<br />
                </Question>

                <Question
                    question="Do you want to have different UI for phone and tablet?"
                    note="There are apps that look good on all screen sizes. And then there are apps that need radical
                    layout changes to ensure good user experience both on smartphones and tablets. Most tools offer the
                    possibility to create different layout for smaller and larger screens, or use the CSS responsive
                    design in case of web technologies. Corona, for example, uses conditional compilation to render the
                    right layout on a device. However, there is a number of tools (Aquro, Codename One, Instant
                    Developer, Kivy, Qt, Tabris, ViziApps) that have no support for different UI layouts. The only way,
                    to create a tablet-specific design is to create a separate application.">
                    <input type="radio"
                           name="tablet"
                           value="Yes"
                           checked={this.props.answers.tablet}
                           onChange={() => this.props.addAnswer(this.props.answers, {tablet: true})}/>Yes<br />
                    <input type="radio"
                           name="tablet"
                           value="Maybe"
                           checked={this.props.answers.tablet == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {tablet: null})}/>Nice to have<br />
                    <input type="radio"
                           name="tablet"
                           value="No"
                           checked={this.props.answers.tablet == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {tablet: false})}/>No<br />
                </Question>

                <Question
                    question="Does the app include any platform-specific overrides?"
                    note="Even if most parts of the application will be the same on all mobile operating systems, there
                    might be one or two things that will differ. While almost all tools
                    achieve this either by replacing code files, conditional compilation or dependency injection, there
                    are a few exceptions which do not support platform-specific overrides, namely Instant Developer,
                    Smartface and ViziApps.">
                    <input type="radio"
                           name="osOverrides"
                           value="Yes"
                           checked={this.props.answers.osOverrides}
                           onChange={() => this.props.addAnswer(this.props.answers, {osOverrides: true})}/>Yes<br />
                    <input type="radio"
                           name="osOverrides"
                           value="Maybe"
                           checked={this.props.answers.osOverrides == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {osOverrides: null})}/>Nice to have<br />
                    <input type="radio"
                           name="osOverrides"
                           value="No"
                           checked={this.props.answers.osOverrides == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {osOverrides: false})}/>No<br />
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
        answers: state.answers
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    previousStep: previousStep,
    addAnswer: addAnswer})(S5);