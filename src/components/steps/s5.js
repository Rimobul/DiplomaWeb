import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addScore} from '../../actions/index';
import {evaluatePoints, isMoreOrEqual} from './utils';
import Question from '../question';

class S5 extends Component {
    constructor(props){
        super(props);

        this.state = {
            complex: 0,
            designer: false,
            tablet: false,
            osOverrides: false
        }
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    getScoreArray(){
        const scoreArray = this.props.scoredFrameworks.map(f => {
            let points = 0;

            points += isMoreOrEqual(this.state.complex, f.performance, 5);
            if(this.state.designer){
                points += evaluatePoints(f.ui.designer[0], 5);
            }
            if(this.state.tablet){
                points += evaluatePoints(f.ui.tabletLayout[0], 5);
            }
            if(this.state.osOverrides){
                points += evaluatePoints(f.osOverrides[0], 5);
            }
            return {name: f.name, points: points};
        });

        return scoreArray;
    }

    render() {
        return (
            <div>
                <Question
                    question="How would you characterize the complexity of your app?"
                    note="TBD">
                    <input type="radio"
                           name="complex"
                           value="0"
                           checked={this.state.complex == 0}
                           onChange={() => this.setState({complex: 0})}/>
                    Prototype-like (Simple app / Focused on quick development)<br />
                    <input type="radio"
                           name="complex"
                           value="1"
                           checked={!this.state.complex == 1}
                           onChange={() => this.setState({complex: 1})}/>
                    Business-grade (Complex app tightly focused on a single API or functionality)<br />
                    <input type="radio"
                           name="complex"
                           value="2"
                           checked={!this.state.complex == 2}
                           onChange={() => this.setState({complex: 2})}/>
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
                           checked={this.state.designer}
                           onChange={() => this.setState({designer: true})}/>Yes<br />
                    <input type="radio"
                           name="designer"
                           value="No"
                           checked={!this.state.designer}
                           onChange={() => this.setState({designer: false})}/>No<br />
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
                           checked={this.state.tablet}
                           onChange={() => this.setState({tablet: true})}/>Yes<br />
                    <input type="radio"
                           name="tablet"
                           value="No"
                           checked={!this.state.tablet}
                           onChange={() => this.setState({tablet: false})}/>No<br />
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
                           checked={this.state.osOverrides}
                           onChange={() => this.setState({osOverrides: true})}/>Yes<br />
                    <input type="radio"
                           name="osOverrides"
                           value="No"
                           checked={!this.state.osOverrides}
                           onChange={() => this.setState({osOverrides: false})}/>No<br />
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
        scoredFrameworks: state.scoredFrameworks,
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    addScore: addScore})(S5);