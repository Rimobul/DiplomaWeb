import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addAnswer, previousStep} from '../../actions/index';
import Question from '../question';

class S1 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    renderiOSnonMac() {
        if (this.props.answers.ios && !this.props.answers.macOs) {
            return (
                <Question
                    question="Do you require iOS builds on non-Mac devices?"
                    note="
                        While Android applications can be built on any desktop OS, projects for iPhones and iPads
                        require
                        compilation on a Mac device. Some tools (like Aquro, Codename One, Smartface and ViziApps)
                        remove
                        this obstacle by providing cloud-based builds. You do not need to buy a Mac, but you must accept
                        that your project is being compiled somewhere in the cloud.">
                    <input type="radio"
                           name="iOSnonMac"
                           value="Yes"
                           checked={this.props.answers.iOSnonMac}
                           onChange={() => this.props.addAnswer(this.props.answers, {iOSnonMac: true})}/>Yes<br />
                    <input type="radio"
                           name="iOSnonMac"
                           value="No"
                           checked={!this.props.answers.iOSnonMac}
                           onChange={() => this.props.addAnswer(this.props.answers, {iOSnonMac: false})}/>No<br />
                </Question>
            );
        }
    }

    renderWinNonWin() {
        if (this.props.answers.windowsPhone && !this.props.answers.windows) {
            return (
                <Question
                    question="Do you require Windows builds on non-Windows desktop devices?"
                    note="Similar to iOS, also Windows mobile requires builds on a Windows desktop machine. Unlike macOS,
                        however, you can install Windows on a virtual machine, side by side with your Linux or Mac, so
                        this problem is solved easier. Yet, you still need at least one Windows license. If you want to
                        avoid buying a Windows PC, or software license, Appery.io, Codename One, Tabris and Telerik
                        Platform offer cloud builds for Windows mobile.">
                    <input type="radio"
                           name="winNonWin"
                           value="Yes"
                           checked={this.props.answers.winNonWin}
                           onChange={() => this.props.addAnswer(this.props.answers, {winNonWin: true})}/>Yes<br />
                    <input type="radio"
                           name="winNonWin"
                           value="No"
                           checked={!this.props.answers.winNonWin}
                           onChange={() => this.props.addAnswer(this.props.answers, {winNonWin: false})}/>No<br />
                </Question>
            );
        }
    }

    render() {
        return (
            <div>
                <Question
                    question="Which mobile operating systems do you want to target?"
                    note="The obvious question is for which operating systems will the application be developed. All tools
                        in our database (and almost all multi-platform development tools in general) allow development
                        for Android and iOS. Development for Windows 10 is also supported by vast majority of tools, or
                        planned, at least. However, development for BlackBerry is getting still more rare.">
                    <input type="checkbox"
                           checked={this.props.answers.android}
                           onClick={() => this.props.addAnswer(this.props.answers, {android: !this.props.answers.android})}/>
                    Android<br />
                    <input type="checkbox"
                           checked={this.props.answers.blackBerry}
                           onClick={() => this.props.addAnswer(this.props.answers, {blackBerry: !this.props.answers.blackBerry})}/>
                    BlackBerry<br/>
                    <input type="checkbox"
                           checked={this.props.answers.ios}
                           onClick={() => this.props.addAnswer(this.props.answers, {ios: !this.props.answers.ios, iOSnonMac: false})}/>
                    iOS<br/>
                    <input type="checkbox"
                           checked={this.props.answers.windowsPhone}
                           onClick={() => this.props.addAnswer(this.props.answers, {
                               windowsPhone: !this.props.answers.windowsPhone,
                               winNonWin: false
                           })}/>
                    Windows<br/>
                </Question>

                <Question
                    question="Which desktop operating systems do you have available for development?"
                    note="Most tools can be installed both on Mac and Windows desktops, while a bit smaller portion
                        supports Linux as well. Others provide a web-based IDE, which is platform independent (but
                        available only online). There are a few exceptions that have very strict limitations, e.g.
                        RubyMotion can be installed and developed only on a Mac.">
                    <input type="checkbox"
                           checked={this.props.answers.linux}
                           onClick={() => this.props.addAnswer(this.props.answers, {linux: !this.props.answers.linux})}/>
                    Linux<br />
                    <input type="checkbox"
                           checked={this.props.answers.macOs}
                           onClick={() => this.props.addAnswer(this.props.answers, {macOs: !this.props.answers.macOs, iOSnonMac: false})}/>
                    macOS<br/>
                    <input type="checkbox"
                           checked={this.props.answers.windows}
                           onClick={() => this.props.addAnswer(this.props.answers, {windows: !this.props.answers.windows, winNonWin: false})}/>
                    Windows<br/>
                    <input type="checkbox"
                           checked={this.props.answers.web}
                           onClick={() => this.props.addAnswer(this.props.answers, {web: !this.props.answers.web})}/>
                    Web environment<br/>
                </Question>

                {this.renderiOSnonMac()}
                {this.renderWinNonWin()}

                <Question
                    question="What is the size of your team? How much are you willing to pay? Note: prices are state per
                            developer per year."
                    note="Most licences and subscriptions are based on the size of the development team. Individuals or
                        small teams can get licences for free, or a very small cost. However, teams around 25 people and
                        above usually require an enterprise-grade licence. These high-end licensing options are usually
                        in thousands of dollars per year per developer.
                        Some companies charge their tools monthly, others annually. In some you pay for the tool itself.
                        Others charge you for IDE, MBaaS features or support and updates. Always examine the possibility
                        to use discounts if you have some sort of subscription. And if the costs are still too high,
                        look for a free and open source tool - there is plenty of them.">
                    <input type="radio"
                           name="size"
                           value="Indie"
                           checked={this.props.answers.size === 1}
                           onChange={() => this.props.addAnswer(this.props.answers, {size: 1})}/>I am an indie developer<br />
                    <input type="radio"
                           name="size"
                           value="Small"
                           checked={this.props.answers.size === 5}
                           onChange={() => this.props.addAnswer(this.props.answers, {size: 5})}/>Up to 5 developers<br />
                    <input type="radio"
                           name="size"
                           value="Medium"
                           checked={this.props.answers.size === 10}
                           onChange={() => this.props.addAnswer(this.props.answers, {size: 10})}/>Up to 10 developers<br />
                    <input type="radio"
                           name="size"
                           value="Large"
                           checked={this.props.answers.size === 25}
                           onChange={() => this.props.addAnswer(this.props.answers, {size: 25})}/>Up to 25 developers<br />
                    <input type="radio"
                           name="size"
                           value="XL"
                           checked={this.props.answers.size === 50}
                           onChange={() => this.props.addAnswer(this.props.answers, {size: 50})}/>More than 25 developers and I want
                    partial enterprise support<br />
                    <input type="radio"
                           name="size"
                           value="XXL"
                           checked={this.props.answers.size === 100}
                           onChange={() => this.props.addAnswer(this.props.answers, {size: 100})}/>More than 25 developers and I want full
                    enterprise support<br />

                    I am willing to pay at most $
                    <input type="number"
                           value={this.props.answers.price}
                           min="0"
                           onChange={event => this.props.addAnswer(this.props.answers, {price: event.target.value})}/>
                    per year per developer.
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
    };
}

function mapStateToProps(state) {
    return {
        allFrameworks: state.allFrameworks,
        answers: state.answers,
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    previousStep: previousStep,
    addAnswer: addAnswer})(S1);