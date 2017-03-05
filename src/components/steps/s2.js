import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addAnswer, previousStep} from '../../actions/index';
import Question from '../question';

class S2 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    renderSingleUiLayer() {
        if (this.props.answers.nativeLook) {
            return (
                <Question
                    question="Do you want to code a single UI layer for all operating systems, or a custom layer for each
                            mobile OS?"
                    note="Even with a single shared UI code, the application may still look native on individual
                        platforms. Many tools offer the possibility of transforming the platform-agnostic UI code into
                        platform-specific UI elements. Others take a different approach and give the possibility for
                        the app to look exactly the same on Android, iOS and Windows. Both approaches have their pros
                        and cons and it depends on each project what is most suitable for them. Kivy, Kony, Qt and most
                        of the hybrid frameworks give the opportunity to have the same look and feel across all
                        operating systems. Appcelerator, Embarcadero, Ionic and Xamarin are examples of tools that
                        take the native UX approach.">
                    <input type="radio"
                           name="singleUi"
                           value="Single"
                           checked={this.props.answers.singleUi}
                           onChange={() => this.props.addAnswer(this.props.answers, {singleUi: true})}/>
                    Single UI layer<br />
                    <input type="radio"
                           name="singleUi"
                           value="Custom"
                           checked={!this.props.answers.singleUi}
                           onChange={() => this.props.addAnswer(this.props.answers, {singleUi: false})}/>
                    Custom UI layer for each mobile OS<br />
                </Question>
            );
        }
    }

    render() {
        return (
            <div>
                <Question
                    question="Do you want the UI to look the same on all operating systems, or use the native look and feel?"
                    note="Even with a single shared UI code, the application may still look native on individual
                        platforms. Many tools offer the possibility of transforming the platform-agnostic UI code into
                        platform-specific UI elements. Others take a different approach and give the possibility for
                        the app to look exactly the same on Android, iOS and Windows. Both approaches have their pros
                        and cons and it depends on each project what is most suitable for them. Kivy, Kony, Qt and most
                        of the hybrid frameworks give the opportunity to have the same look and feel across all
                        operating systems. Appcelerator, Embarcadero, Ionic and Xamarin are examples of tools that
                        take the native UX approach.">
                    <input type="radio"
                           name="lookAndFeel"
                           value="Same"
                           checked={!this.props.answers.nativeLook}
                           onChange={() => this.props.addAnswer(this.props.answers, {nativeLook: false, singleUi: true})}/>
                    Same across all operating systems<br />
                    <input type="radio"
                           name="lookAndFeel"
                           value="Native"
                           checked={this.props.answers.nativeLook}
                           onChange={() => this.props.addAnswer(this.props.answers, {nativeLook: true})}/>Native look and feel<br />
                </Question>

                {this.renderSingleUiLayer()}

                <Question
                    question="Does your project require multithreading?"
                    note="Downloading, uploading, calling remote web services, image and sound processing or other
                        computation-heavy calculations are all examples of tasks, which take some time. During this
                        time the app should still be responsive and, perhaps, be able to schedule also further tasks.
                        This requires using multiple threads - one serving the UI responsiveness and the others doing
                        the tasks in background. If the project contains a large portion of functionality involving
                        multitasking, you should avoid all JavaScript-based tools (both hybrid and interpreted).
                        JavaScript does not support threading on a language level, and while there are workarounds using
                        web workers, their implementation is inferior, compared to traditional threads. Using C++, C#,
                        Java, Python or Ruby should handle the situation just fine.">
                    <input type="radio"
                           name="multithreading"
                           value="Yes"
                           checked={this.props.answers.multithreading}
                           onChange={() => this.props.addAnswer(this.props.answers, {multithreading: true})}/>Yes<br />
                    <input type="radio"
                           name="multithreading"
                           value="Maybe"
                           checked={this.props.answers.multithreading == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {multithreading: null})}/>Nice to have<br />
                    <input type="radio"
                           name="multithreading"
                           value="No"
                           checked={this.props.answers.multithreading == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {multithreading: false})}/>No<br />
                </Question>

                <Question
                    question="Do you want to access the media, use the camera and microphone, play audio and video?"
                    note="Capturing photos and videos is one of the most common hardware interfaces used in mobile
                        applications. While all studied development tools allow taking photos, not all of them are able
                        to capture video or record sounds (Kivy, Kony, NativeScript, React Native). For example, there
                        exists a 3rd party library for Kivy, but it allows recording sounds only for Android. Even the
                        consecutive replay of recorded sound or video is not warranted in all tools - it is completely
                        absent in Instant Developer, and a 3rd party library is needed for NativeScript and React
                        Native.">
                    <input type="checkbox"
                           checked={this.props.answers.camera}
                           onClick={() => this.props.addAnswer(this.props.answers, {camera: !this.props.answers.camera})}/>
                    Camera<br />
                    <input type="checkbox"
                           checked={this.props.answers.microphone}
                           onClick={() => this.props.addAnswer(this.props.answers, {microphone: !this.props.answers.microphone})}/>
                    Microphone<br/>
                    <input type="checkbox"
                           checked={this.props.answers.video}
                           onClick={() => this.props.addAnswer(this.props.answers, {video: !this.props.answers.video})}/>
                    Play video<br/>
                    <input type="checkbox"
                           checked={this.props.answers.audio}
                           onClick={() => this.props.addAnswer(this.props.answers, {audio: !this.props.answers.audio})}/>
                    Play audio<br/>
                </Question>

                <Question
                    question="Do you want to use geolocation, accelerometer or gyroscope?"
                    note="The global and relative positioning of the mobile device is another functionality often used in
                        an application. Accessing GPS and navigation is offered out-of-the-box in all tools, except of
                        Kivy and Smartface. However, using accelerometer or gyroscope needs a 3rd party library or
                        custom implementation in Kivy, NativeScript, React Native and Smartface.">
                    <input type="checkbox"
                           checked={this.props.answers.gps}
                           onClick={() => this.props.addAnswer(this.props.answers, {gps: !this.props.answers.gps})}/>
                    Geolocation<br />
                    <input type="checkbox"
                           checked={this.props.answers.accelerometer}
                           onClick={() => this.props.addAnswer(this.props.answers, {accelerometer: !this.props.answers.accelerometer})}/>
                    Accelerometer<br/>
                    <input type="checkbox"
                           checked={this.props.answers.gyro}
                           onClick={() => this.props.addAnswer(this.props.answers, {gyro: !this.props.answers.gyro})}/>
                    Gyroscope<br/>
                </Question>

                <Question
                    question="Do you want to access the device state (battery status, network availability, OS version,
                            etc.)?"
                    note="Although this functionality is not usually required, particular applications may change their
                        behaviour due to low battery power or unstable Internet connection. Yet, some tools do not
                        provide this information (Corona, Kony, ViziApps) or rely on 3rd party libraries or custom
                        implementation (Codename One, Kivy, Qt, React Native).">
                    <input type="radio"
                           name="deviceState"
                           value="Yes"
                           checked={this.props.answers.deviceState}
                           onChange={() => this.props.addAnswer(this.props.answers, {deviceState: true})}/>Yes<br />
                    <input type="radio"
                           name="deviceState"
                           value="Maybe"
                           checked={this.props.answers.deviceState == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {deviceState: null})}/>Nice to have<br />
                    <input type="radio"
                           name="deviceState"
                           value="No"
                           checked={this.props.answers.deviceState == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {deviceState: false})}/>No<br />
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
        currentStep: state.currentStep,
        answers: state.answers
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    previousStep: previousStep,
    addAnswer: addAnswer})(S2);
