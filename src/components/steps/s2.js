import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, filterFrameworks} from '../../actions/index';
import {isNullOrTrue} from './utils';

class S2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nativeLook: false,
            singleUi: true,
            multithreading: false,
            camera: false,
            microphone: false,
            video: false,
            audio: false,
            gps: false,
            accelerometer: false,
            gyro: false,
            deviceState: false
        };

        console.log('S2 ctor', props.filteredFrameworks);
    }

    getSuitableFrameworks() {
        return this.props.filteredFrameworks.filter(f =>
            (this.state.nativeLook ? isNullOrTrue(f.ui.nativeLook[0]) : !isNullOrTrue(f.ui.nativeLook[0])) &&
            (this.state.singleUi ?
                f.ui.uiLayers.some(ui => ui === "Single") :
                f.ui.uiLayers.some(ui => ui === "Custom")) &&
            (!this.state.multithreading || isNullOrTrue(f.multithreading[0])) &&
            (!this.state.camera || isNullOrTrue(f.sensors.camera[0])) &&
            (!this.state.microphone || isNullOrTrue(f.sensors.microphone[0])) &&
            (!this.state.video || isNullOrTrue(f.apis.video[0])) &&
            (!this.state.audio || isNullOrTrue(f.apis.audio[0])) &&
            (!this.state.gps || isNullOrTrue(f.sensors.geolocation[0])) &&
            (!this.state.accelerometer || isNullOrTrue(f.sensors.accelerometer[0])) &&
            (!this.state.gyro || isNullOrTrue(f.sensors.gyroscope[0])) &&
            (!this.state.deviceState || isNullOrTrue(f.apis.deviceState[0]))
        );
    }

    renderSingleUiLayer() {
        if (this.state.nativeLook) {
            return (
                <div className="question">
                    <div className="col-md-8">
                        <div className="question-title">
                            Do you want to code a single UI layer for all operating systems, or a custom layer for each
                            mobile OS?
                        </div>
                        <div className="answers col-md-10 col-md-offset-2">
                            <input type="radio"
                                   name="singleUi"
                                   value="Single"
                                   checked={this.state.singleUi}
                                   onChange={() => this.setState({singleUi: true})}/>
                            Single UI layer<br />
                            <input type="radio"
                                   name="singleUi"
                                   value="Custom"
                                   checked={!this.state.singleUi}
                                   onChange={() => this.setState({singleUi: false})}/>
                            Custom UI layer for each mobile OS<br />
                        </div>
                    </div>
                    <div className="note col-md-4">
                        Even with a single shared UI code, the application may still look native on individual
                        platforms. Many tools offer the possibility of transforming the platform-agnostic UI code into
                        platform-specific UI elements. Others take a different approach and give the possibility for
                        the app to look exactly the same on Android, iOS and Windows. Both approaches have their pros
                        and cons and it depends on each project what is most suitable for them. Kivy, Kony, Qt and most
                        of the hybrid frameworks give the opportunity to have the same look and feel across all
                        operating systems. Appcelerator, Embarcadero, Ionic and Xamarin are examples of tools that
                        take the native UX approach.
                    </div>
                </div>
            );
        }
    }

    render() {
        const filteredFrameworks = this.getSuitableFrameworks();
        console.log('S2', filteredFrameworks.map(f => f.name), this.state, filteredFrameworks, this.props.filteredFrameworks);

        return (
            <div>
                {filteredFrameworks.length} frameworks satisfy your requirements.

                <div className="question">
                    <div className="col-md-8">
                        <div className="question-title">
                            Do you want the UI to look the same on all operating systems, or use the native look and
                            feel?
                        </div>
                        <div className="answers col-md-10 col-md-offset-2">
                            <input type="radio"
                                   name="lookAndFeel"
                                   value="Same"
                                   checked={!this.state.nativeLook}
                                   onChange={() => this.setState({nativeLook: false, singleUi: true})}/>
                            Same across all operating systems<br />
                            <input type="radio"
                                   name="lookAndFeel"
                                   value="Native"
                                   checked={this.state.nativeLook}
                                   onChange={() => this.setState({nativeLook: true})}/>Native look and feel<br />
                        </div>
                    </div>
                    <div className="note col-md-4">
                        Even with a single shared UI code, the application may still look native on individual
                        platforms. Many tools offer the possibility of transforming the platform-agnostic UI code into
                        platform-specific UI elements. Others take a different approach and give the possibility for
                        the app to look exactly the same on Android, iOS and Windows. Both approaches have their pros
                        and cons and it depends on each project what is most suitable for them. Kivy, Kony, Qt and most
                        of the hybrid frameworks give the opportunity to have the same look and feel across all
                        operating systems. Appcelerator, Embarcadero, Ionic and Xamarin are examples of tools that
                        take the native UX approach.
                    </div>
                </div>

                {this.renderSingleUiLayer()}

                <div className="question">
                    <div className="col-md-8">
                        <div className="question-title">
                            Does your project require multithreading?
                        </div>
                        <div className="answers col-md-10 col-md-offset-2">
                            <input type="radio"
                                   name="multithreading"
                                   value="Yes"
                                   checked={this.state.multithreading}
                                   onChange={() => this.setState({multithreading: true})}/>Yes<br />
                            <input type="radio"
                                   name="multithreading"
                                   value="No"
                                   checked={!this.state.multithreading}
                                   onChange={() => this.setState({multithreading: false})}/>No<br />
                        </div>
                    </div>
                    <div className="note col-md-4">
                        Downloading, uploading, calling remote web services, image and sound processing or other
                        computation-heavy calculations are all examples of tasks, which take some time. During this
                        time the app should still be responsive and, perhaps, be able to schedule also further tasks.
                        This requires using multiple threads - one serving the UI responsiveness and the others doing
                        the tasks in background. If the project contains a large portion of functionality involving
                        multitasking, you should avoid all JavaScript-based tools (both hybrid and interpreted).
                        JavaScript does not support threading on a language level, and while there are workarounds using
                        web workers, their implementation is inferior, compared to traditional threads. Using C++, C#,
                        Java, Python or Ruby should handle the situation just fine.
                    </div>
                </div>

                <div className="question">
                    <div className="col-md-8">
                        <div className="question-title">
                            Do you want to access the media, use the camera and microphone, play audio and video?
                        </div>
                        <div className="answers col-md-10 col-md-offset-2">
                            <input type="checkbox"
                                   checked={this.state.camera}
                                   onClick={() => this.setState({camera: !this.state.camera})}/>
                            Camera<br />
                            <input type="checkbox"
                                   checked={this.state.microphone}
                                   onClick={() => this.setState({microphone: !this.state.microphone})}/>
                            Microphone<br/>
                            <input type="checkbox"
                                   checked={this.state.video}
                                   onClick={() => this.setState({video: !this.state.video})}/>
                            Play video<br/>
                            <input type="checkbox"
                                   checked={this.state.audio}
                                   onClick={() => this.setState({audio: !this.state.audio})}/>
                            Play audio<br/>
                        </div>
                    </div>
                    <div className="note col-md-4">
                        Capturing photos and videos is one of the most common hardware interfaces used in mobile
                        applications. While all studied development tools allow taking photos, not all of them are able
                        to capture video or record sounds (Kivy, Kony, NativeScript, React Native). For example, there
                        exists a 3rd party library for Kivy, but it allows recording sounds only for Android. Even the
                        consecutive replay of recorded sound or video is not warranted in all tools - it is completely
                        absent in Instant Developer, and a 3rd party library is needed for NativeScript and React
                        Native.
                    </div>
                </div>

                <div className="question">
                    <div className="col-md-8">
                        <div className="question-title">
                            Do you want to use geolocation, accelerometer or gyroscope?
                        </div>
                        <div className="answers col-md-10 col-md-offset-2">
                            <input type="checkbox"
                                   checked={this.state.gps}
                                   onClick={() => this.setState({gps: !this.state.gps})}/>
                            Geolocation<br />
                            <input type="checkbox"
                                   checked={this.state.accelerometer}
                                   onClick={() => this.setState({accelerometer: !this.state.accelerometer})}/>
                            Accelerometer<br/>
                            <input type="checkbox"
                                   checked={this.state.gyro}
                                   onClick={() => this.setState({gyro: !this.state.gyro})}/>
                            Gyroscope<br/>
                        </div>
                    </div>
                    <div className="note col-md-4">
                        The global and relative positioning of the mobile device is another functionality often used in
                        an application. Accessing GPS and navigation is offered out-of-the-box in all tools, except of
                        Kivy and Smartface. However, using accelerometer or gyroscope needs a 3rd party library or
                        custom implementation in Kivy, NativeScript, React Native and Smartface.
                    </div>
                </div>

                <div className="question">
                    <div className="col-md-8">
                        <div className="question-title">
                            Do you want to access the device state (battery status, network availability, OS version,
                            etc.)?
                        </div>
                        <div className="answers col-md-10 col-md-offset-2">
                            <input type="radio"
                                   name="deviceState"
                                   value="Yes"
                                   checked={this.state.deviceState}
                                   onChange={() => this.setState({deviceState: true})}/>Yes<br />
                            <input type="radio"
                                   name="deviceState"
                                   value="No"
                                   checked={!this.state.deviceState}
                                   onChange={() => this.setState({deviceState: false})}/>No<br />
                        </div>
                    </div>
                    <div className="note col-md-4">
                        Although this functionality is not usually required, particular applications may change their
                        behaviour due to low battery power or unstable Internet connection. Yet, some tools do not
                        provide this information (Corona, Kony, ViziApps) or rely on 3rd party libraries or custom
                        implementation (Codename One, Kivy, Qt, React Native).
                    </div>
                </div>

                <div>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            this.props.filterFrameworks(this.getSuitableFrameworks());
                            this.props.nextStep(this.props.currentStep)
                        }}>
                        Continue
                        <span className="glyphicon glyphicon-play"></span>
                    </button>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        allFrameworks: state.allFrameworks,
        filteredFrameworks: state.filteredFrameworks,
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, {nextStep: nextStep, filterFrameworks: filterFrameworks})(S2);
