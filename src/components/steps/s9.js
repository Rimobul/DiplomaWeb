import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addScore, addAnswer} from '../../actions/index';
import {evaluatePoints, isNullOrTrue} from './utils';
import Question from '../question';

class S9 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    getScoreArray(){
        const scoreArray = this.props.scoredFrameworks.map(f => {
            let points = 0;
            if(this.props.answers.angular){
                points += evaluatePoints(f.languages.some(l => l === "Angular"), 1);
            }
            if(this.props.answers.basic){
                points += evaluatePoints(f.languages.some(l => l === "BASIC"), 1);
            }
            if(this.props.answers.cpp){
                points += evaluatePoints(f.languages.some(l => l === "C++"), 1);
            }
            if(this.props.answers.csharp){
                points += evaluatePoints(f.languages.some(l => l === "C#"), 1);
            }
            if(this.props.answers.delphi){
                points += evaluatePoints(f.languages.some(l => l === "Delphi"), 1);
            }
            if(this.props.answers.js){
                points += evaluatePoints(f.languages.some(l => l === "JavaScript"), 1);
            }
            if(this.props.answers.java){
                points += evaluatePoints(f.languages.some(l => l === "Java"), 1);
            }
            if(this.props.answers.lua){
                points += evaluatePoints(f.languages.some(l => l === "Lua"), 1);
            }
            if(this.props.answers.python){
                points += evaluatePoints(f.languages.some(l => l === "Python"), 1);
            }
            if(this.props.answers.react){
                points += evaluatePoints(f.languages.some(l => l === "React"), 1);
            }
            if(this.props.answers.ruby){
                points += evaluatePoints(f.languages.some(l => l === "Ruby"), 1);
            }
            if(this.props.answers.codefree){
                points += evaluatePoints(f.languages.some(l => l === "Code-free"), 1);
            }
            if(this.props.answers.mbaas){
                points += evaluatePoints(f.mbaas[0], 1);
            }
            if(this.props.answers.browser){
                points += evaluatePoints(f.apis.embeddedBrowser[0], 1);
            }
            if(this.props.answers.call){
                points += evaluatePoints(isNullOrTrue(f.apis.addressBook[0]) && isNullOrTrue(f.apis.callSms[0]), 1);
            }
            return {name: f.name, points: points};
        });

        return scoreArray;
    }

    render(){
        return(
            <div>
                <Question
                    question="Do you have experience with any of the following programming languages?"
                    note="Even if the developers have no previous experience with a multi-platform development tool,
                    high skills in a particular programming language might help them to learn using it more quickly.

                    Currently, the most wide-spread programming language for multi-platform development is JavaScript,
                    or some of its derivatives (Angular, TypeScript). However, there exists at least one or two tools
                    for each major programming language (BASIC, C++, C#, Delphi, Java, Lua, Python, Ruby). There are
                    even a few tools which allow code-free visual app building.">
                    <input type="checkbox"
                           checked={this.props.answers.angular}
                           onClick={() => this.props.addAnswer(this.props.answers, {angular: !this.props.answers.angular})}/>
                    AngularJS<br />
                    <input type="checkbox"
                           checked={this.props.answers.basic}
                           onClick={() => this.props.addAnswer(this.props.answers, {basic: !this.props.answers.basic})}/>
                    BASIC<br/>
                    <input type="checkbox"
                           checked={this.props.answers.cpp}
                           onClick={() => this.props.addAnswer(this.props.answers, {cpp: !this.props.answers.cpp})}/>
                    C++<br/>
                    <input type="checkbox"
                           checked={this.props.answers.csharp}
                           onClick={() => this.props.addAnswer(this.props.answers, {csharp: !this.props.answers.csharp})}/>
                    C#<br />
                    <input type="checkbox"
                           checked={this.props.answers.delphi}
                           onClick={() => this.props.addAnswer(this.props.answers, {delphi: !this.props.answers.delphi})}/>
                    Delphi<br />
                    <input type="checkbox"
                           checked={this.props.answers.js}
                           onClick={() => this.props.addAnswer(this.props.answers, {js: !this.props.answers.js})}/>
                    JavaScript (or an alternative, like CoffeeScript or TypeScript)<br />
                    <input type="checkbox"
                           checked={this.props.answers.java}
                           onClick={() => this.props.addAnswer(this.props.answers, {java: !this.props.answers.java})}/>
                    Java<br />
                    <input type="checkbox"
                           checked={this.props.answers.lua}
                           onClick={() => this.props.addAnswer(this.props.answers, {lua: !this.props.answers.lua})}/>
                    Lua<br />
                    <input type="checkbox"
                           checked={this.props.answers.python}
                           onClick={() => this.props.addAnswer(this.props.answers, {python: !this.props.answers.python})}/>
                    Python<br />
                    <input type="checkbox"
                           checked={this.props.answers.react}
                           onClick={() => this.props.addAnswer(this.props.answers, {react: !this.props.answers.react})}/>
                    ReactJS<br />
                    <input type="checkbox"
                           checked={this.props.answers.ruby}
                           onClick={() => this.props.addAnswer(this.props.answers, {ruby: !this.props.answers.ruby})}/>
                    Ruby<br />
                    <input type="checkbox"
                           checked={this.props.answers.codefree}
                           onClick={() => this.props.addAnswer(this.props.answers, {codefree: !this.props.answers.codefree})}/>
                    I am looking for a code-free solution<br/>
                </Question>

                <Question
                    question="Are MBaaS features or cloud connection necessary?"
                    note="Many project rely on at least some basic cloud connectivity. Interaction with backend server
                    or social networks is exactly what MBaaS providers offer. If the development tool does not feature
                    an out-of-the-box MBaaS support, check the possibility of custom implementation. Especially
                    code-free and JavaScript-based tools are prone to inability to add custom functionality.">
                    <input type="radio"
                           name="mbaas"
                           value="Yes"
                           checked={this.props.answers.mbaas}
                           onChange={() => this.props.addAnswer(this.props.answers, {mbaas: true})}/>Yes<br />
                    <input type="radio"
                           name="mbaas"
                           value="No"
                           checked={!this.props.answers.mbaas}
                           onChange={() => this.props.addAnswer(this.props.answers, {mbaas: false})}/>No<br />
                </Question>

                <Question
                    question="Do you need an embedded web browser?"
                    note="Using an embedded web browser is one of the less common functionalities. Its use is very
                    peculiar in case of the hybrid apps, since they themselves are ran from within a web browser -
                    therefore, it is a browser inside a browser. Yet, with the exception of Instant Developer and
                    Smartface, all tools support this functionality. Ionic, Kivy and NeoMAD require custom
                    implementation and PhoneGap does not feature web browser for BlackBerry.">
                    <input type="radio"
                           name="browser"
                           value="Yes"
                           checked={this.props.answers.browser}
                           onChange={() => this.props.addAnswer(this.props.answers, {browser: true})}/>Yes<br />
                    <input type="radio"
                           name="browser"
                           value="No"
                           checked={!this.props.answers.browser}
                           onChange={() => this.props.addAnswer(this.props.answers, {browser: false})}/>No<br />
                </Question>

                <Question
                    question="Do you want to access the address book and be able to make a call, or send SMS?"
                    note="While contemporary smartphones are often more smart than phones, accessing the contacts list,
                    making calls or texting is still used, from time to time. It is therefore a bit of relief that all
                    examined development tools support this functionality, although some may require a 3rd party
                    library.">
                    <input type="radio"
                           name="call"
                           value="Yes"
                           checked={this.props.answers.call}
                           onChange={() => this.props.addAnswer(this.props.answers, {call: true})}/>Yes<br />
                    <input type="radio"
                           name="call"
                           value="No"
                           checked={!this.props.answers.call}
                           onChange={() => this.props.addAnswer(this.props.answers, {call: false})}/>No<br />
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
        scoredFrameworks: state.scoredFrameworks,
        answers: state.answers
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    addScore: addScore,
    addAnswer: addAnswer})(S9);