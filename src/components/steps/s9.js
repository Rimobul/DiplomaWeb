import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addScore} from '../../actions/index';
import {evaluatePoints, isNullOrTrue} from './utils';
import Question from '../question';

class S9 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            angular: false,
            basic: false,
            cpp: false,
            csharp: false,
            delphi: false,
            js: false,
            java: false,
            lua: false,
            python: false,
            react: false,
            ruby: false,
            codefree: false,
            mbaas: false,
            browser: false,
            call: false
        }
    }

    componentDidMount () {
        window.scrollTo(0, 0)
    }

    getScoreArray(){
        const scoreArray = this.props.scoredFrameworks.map(f => {
            let points = 0;
            if(this.state.angular){
                points += evaluatePoints(f.languages.some(l => l === "Angular"), 1);
            }
            if(this.state.basic){
                points += evaluatePoints(f.languages.some(l => l === "BASIC"), 1);
            }
            if(this.state.cpp){
                points += evaluatePoints(f.languages.some(l => l === "C++"), 1);
            }
            if(this.state.csharp){
                points += evaluatePoints(f.languages.some(l => l === "C#"), 1);
            }
            if(this.state.delphi){
                points += evaluatePoints(f.languages.some(l => l === "Delphi"), 1);
            }
            if(this.state.js){
                points += evaluatePoints(f.languages.some(l => l === "JavaScript"), 1);
            }
            if(this.state.java){
                points += evaluatePoints(f.languages.some(l => l === "Java"), 1);
            }
            if(this.state.lua){
                points += evaluatePoints(f.languages.some(l => l === "Lua"), 1);
            }
            if(this.state.python){
                points += evaluatePoints(f.languages.some(l => l === "Python"), 1);
            }
            if(this.state.react){
                points += evaluatePoints(f.languages.some(l => l === "React"), 1);
            }
            if(this.state.ruby){
                points += evaluatePoints(f.languages.some(l => l === "Ruby"), 1);
            }
            if(this.state.codefree){
                points += evaluatePoints(f.languages.some(l => l === "Code-free"), 1);
            }
            if(this.state.mbaas){
                points += evaluatePoints(f.mbaas[0], 1);
            }
            if(this.state.browser){
                points += evaluatePoints(f.apis.embeddedBrowser[0], 1);
            }
            if(this.state.call){
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
                           checked={this.state.angular}
                           onClick={() => this.setState({angular: !this.state.angular})}/>
                    AngularJS<br />
                    <input type="checkbox"
                           checked={this.state.basic}
                           onClick={() => this.setState({basic: !this.state.basic})}/>
                    BASIC<br/>
                    <input type="checkbox"
                           checked={this.state.cpp}
                           onClick={() => this.setState({cpp: !this.state.cpp})}/>
                    C++<br/>
                    <input type="checkbox"
                           checked={this.state.csharp}
                           onClick={() => this.setState({csharp: !this.state.csharp})}/>
                    C#<br />
                    <input type="checkbox"
                           checked={this.state.delphi}
                           onClick={() => this.setState({delphi: !this.state.delphi})}/>
                    Delphi<br />
                    <input type="checkbox"
                           checked={this.state.js}
                           onClick={() => this.setState({js: !this.state.js})}/>
                    JavaScript (or an alternative, like CoffeeScript or TypeScript)<br />
                    <input type="checkbox"
                           checked={this.state.java}
                           onClick={() => this.setState({java: !this.state.java})}/>
                    Java<br />
                    <input type="checkbox"
                           checked={this.state.lua}
                           onClick={() => this.setState({lua: !this.state.lua})}/>
                    Lua<br />
                    <input type="checkbox"
                           checked={this.state.python}
                           onClick={() => this.setState({python: !this.state.python})}/>
                    Python<br />
                    <input type="checkbox"
                           checked={this.state.react}
                           onClick={() => this.setState({react: !this.state.react})}/>
                    ReactJS<br />
                    <input type="checkbox"
                           checked={this.state.ruby}
                           onClick={() => this.setState({ruby: !this.state.ruby})}/>
                    Ruby<br />
                    <input type="checkbox"
                           checked={this.state.codefree}
                           onClick={() => this.setState({codefree: !this.state.codefree})}/>
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
                           checked={this.state.mbaas}
                           onChange={() => this.setState({mbaas: true})}/>Yes<br />
                    <input type="radio"
                           name="mbaas"
                           value="No"
                           checked={!this.state.mbaas}
                           onChange={() => this.setState({mbaas: false})}/>No<br />
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
                           checked={this.state.browser}
                           onChange={() => this.setState({browser: true})}/>Yes<br />
                    <input type="radio"
                           name="browser"
                           value="No"
                           checked={!this.state.browser}
                           onChange={() => this.setState({browser: false})}/>No<br />
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
                           checked={this.state.call}
                           onChange={() => this.setState({call: true})}/>Yes<br />
                    <input type="radio"
                           name="call"
                           value="No"
                           checked={!this.state.call}
                           onChange={() => this.setState({call: false})}/>No<br />
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

export default connect(mapStateToProps, { nextStep: nextStep, addScore: addScore })(S9);