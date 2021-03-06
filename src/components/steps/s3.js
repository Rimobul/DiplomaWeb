import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addAnswer, getScore, previousStep} from '../../actions/index';
import Question from '../question';

class S3 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Question
                    question="Do you want to use a background process?"
                    note="Some applications might find it useful to have a permanent background service with no interface.
                        This could be applied for several use cases, like tracking the position, updating stock markets
                        data, notifying user of an emergency situation. You should take into consideration, that iOS has
                        very limited support for background processes, allowing only geolocation updates. All other
                        background functionality is restricted (with the exception for VoIP applications). The only
                        possible workaround is using remote push notifications. Android, BlackBerry and Windows allow
                        creating background processes, but their implementation and requirements may differ. In all
                        cases, you should keep in mind that background processes on any platform are considered low
                        priority. Therefore they are the first victims when the underlying OS needs to kill running apps
                        and get more resources.
                        Because of these obstacles, only a handful of tools provide a way to create background services
                        (Codename One, Embarcadero, NeoMAD, Qt, Xamarin). Although there exist 3rd party libraries for
                        all tools based on Apache Cordova, their functionality is limited and inconsistent across
                        individual operating systems.">
                    <input type="radio"
                           name="background"
                           value="Yes"
                           checked={this.props.answers.background}
                           onChange={() => this.props.addAnswer(this.props.answers, {background: true})}/>Yes<br />
                    <input type="radio"
                           name="background"
                           value="Maybe"
                           checked={this.props.answers.background == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {background: null})}/>Nice to have<br />
                    <input type="radio"
                           name="background"
                           value="No"
                           checked={this.props.answers.background == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {background: false})}/>No<br />
                </Question>

                <Question
                    question="Do you want to use PUSH notifications?"
                    note="Unlike local notifications, which are both sent and received by the application itself, push
                        notifications are one of the few ways how a remote server can alert your application without
                        prior request. They are important on Android and Windows, since there are still limited ways for
                        push-model communication. However, they are absolutely essential on iOS, because it is the only
                        way to replace background processes. It should be noted, that notifications differ a lot on
                        individual platform. On Android, they are the most customizable, allowing various sorts of
                        interaction, customization and binding functionality. It is possible to create interactive
                        notifications on Windows as well. However, iOS are very limited, offer almost no interactivity
                        and - in case the application is in background - push notifications are handled by the operating
                        system itself, rather than the hosting application.
                        Push notifications are well established in tools providing MBaaS services, as it is one of their
                        core functionalities. Yet, they are such an essential feature nowadays, almost all
                        multi-platform development tools implement them (with Kivy and Qt supporting only Android and
                        Windows notifications).">
                    <input type="radio"
                           name="push"
                           value="Yes"
                           checked={this.props.answers.push}
                           onChange={() => this.props.addAnswer(this.props.answers, {push: true})}/>Yes<br />
                    <input type="radio"
                           name="push"
                           value="Maybe"
                           checked={this.props.answers.push == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {push: null})}/>Nice to have<br />
                    <input type="radio"
                           name="push"
                           value="No"
                           checked={this.props.answers.push == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {push: false})}/>No<br />
                </Question>

                <Question
                    question="Do you need to create custom plugins or invoke native libraries?"
                    note="Even with the richest environment of 3rd party plugins, there can still be a custom library or
                        UI element that is only available as a native C#/Java/ObjectiveC/Swift package. You may also
                        want to target a specific device, which has non-standard API, such as ambient lights. To do so,
                        you need to interact with the native package either through a wrapper, or directly. Most tools
                        provide one way or another to achieve this capability. But code-free tools, like Instant
                        Developer, SmartFace or ViziApps have limited to no support for such behaviour.">
                    <input type="radio"
                           name="invokeNative"
                           value="Yes"
                           checked={this.props.answers.invokeNative}
                           onChange={() => this.props.addAnswer(this.props.answers, {invokeNative: true})}/>Yes<br />
                    <input type="radio"
                           name="invokeNative"
                           value="Maybe"
                           checked={this.props.answers.invokeNative == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {invokeNative: null})}/>Nice to have<br />
                    <input type="radio"
                           name="invokeNative"
                           value="No"
                           checked={this.props.answers.invokeNative == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {invokeNative: false})}/>No<br />
                </Question>

                <Question
                    question="Is app monitoring and crash analytics required by the project?"
                    note="Even when the app is out, the work is not done. Monitoring usage, performance and application
                        crashes is vital for providing continual support and improvement. While there are some free
                        libraries and tools like ACRA, Crashlytics or Xcode Crash Reports, they may not be compatible
                        with your chosen development tool. You should closely examine, whether integration of the
                        multi-platform development tool and analytics framework is possible. If not, try to find out,
                        whether an alternative is provided by the tool (e.g. Telerik Analytics for NativeScript or
                        HockeyApp for Xamarin).">
                    <input type="radio"
                           name="crash"
                           value="Yes"
                           checked={this.props.answers.crash}
                           onChange={() => this.props.addAnswer(this.props.answers, {crash: true})}/>Yes<br />
                    <input type="radio"
                           name="crash"
                           value="Maybe"
                           checked={this.props.answers.crash == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {crash: null})}/>Nice to have<br />
                    <input type="radio"
                           name="crash"
                           value="No"
                           checked={this.props.answers.crash == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {crash: false})}/>No<br />
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
                            this.props.getScore(this.props.allFrameworks, this.props.answers);
                            this.props.nextStep(this.props.currentStep);
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
        allFrameworks: state.allFrameworks,
        answers: state.answers,
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    previousStep: previousStep,
    addAnswer: addAnswer,
    getScore: getScore})(S3);