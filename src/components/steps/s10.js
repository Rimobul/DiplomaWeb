import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addAnswer, previousStep} from '../../actions/index';
import Question from '../question';

class S10 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>
                <Question
                    question="Is a testing environment for multiple devices required?"
                    note="Even automated tests on an emulator or real device have one major shortfall - they test only
                    a single screen size. Screen fragmentation is a long lasting and well known issue on Android
                    devices, but with the support for older hardware it is relevant also in the iOS and Windows world.
                    Amazon Web Services provide a service known as Device Farm, which allows simultaneous UI testing on
                    hundreds of physical Android and iOS devices in the cloud. Similar services are offered also by
                    BitBar, Firebase and TestObject . Some of the multi-platform development tools featured in this
                    thesis provide also a cloud testing service, arguably with better integration with their product
                    line (e.g. Telerik and Xamarin). If your app has the potential of being installed by millions of
                    users, testing it on a Device Farm, or similar service, may be highly beneficial.">
                    <input type="radio"
                           name="multitest"
                           value="Yes"
                           checked={this.props.answers.multitest}
                           onChange={() => this.props.addAnswer(this.props.answers, {multitest: true})}/>Yes<br />
                    <input type="radio"
                           name="multitest"
                           value="Maybe"
                           checked={this.props.answers.multitest == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {multitest: null})}/>Nice to have<br />
                    <input type="radio"
                           name="multitest"
                           value="No"
                           checked={this.props.answers.multitest == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {multitest: false})}/>No<br />
                </Question>

                <Question
                    question="Should the tool support continuous integration?"
                    note="Continuous integration is a crucial part of DevOps, enabling small but valuable and rapid
                    updates of an product or service. The whole process consists of various steps, like from coding,
                    collaboration, versioning, unit and automatic testing to packaging, releasing and configuration
                    management. A tool that can be easily incorporated into the process can result in shorter
                    development cycles and higher customer satisfaction.">
                    <input type="radio"
                           name="ci"
                           value="Yes"
                           checked={this.props.answers.ci}
                           onChange={() => this.props.addAnswer(this.props.answers, {ci: true})}/>Yes<br />
                    <input type="radio"
                           name="ci"
                           value="Maybe"
                           checked={this.props.answers.ci == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {ci: null})}/>Nice to have<br />
                    <input type="radio"
                           name="ci"
                           value="No"
                           checked={this.props.answers.ci == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {ci: false})}/>No<br />
                </Question>

                <Question
                    question="Is support for closed test groups required?"
                    note="While all major application stores feature the possibility to share a WIP app to a tester
                    group (Apple TestFlight, Google Play Testing, Windows Package Flights), some multi-platform
                    development tools offer incorporated features of app distribution, giving you even more control.
                    ViziApps, for example, offers the possibility of OTA (Over the Air) updates of installed apps.">
                    <input type="radio"
                           name="closedGroups"
                           value="Yes"
                           checked={this.props.answers.closedGroups}
                           onChange={() => this.props.addAnswer(this.props.answers, {closedGroups: true})}/>Yes<br />
                    <input type="radio"
                           name="closedGroups"
                           value="Maybe"
                           checked={this.props.answers.closedGroups == null}
                           onChange={() => this.props.addAnswer(this.props.answers, {closedGroups: null})}/>Nice to have<br />
                    <input type="radio"
                           name="closedGroups"
                           value="No"
                           checked={this.props.answers.closedGroups == false}
                           onChange={() => this.props.addAnswer(this.props.answers, {closedGroups: false})}/>No<br />
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
    addAnswer: addAnswer})(S10);