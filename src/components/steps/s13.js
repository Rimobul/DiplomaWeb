import React, {Component} from 'react';
import {connect} from 'react-redux';
import {resetSteps, previousStep, resetAnswers} from '../../actions/index';

class S13 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                If you are still not decided, which framework to use, try to investigate the following topics:
                <ul>
                    <li>
                        <strong>Is there a source of 3rd party libraries? How rich is it?</strong>
                        <br/>
                        <small>Even if a tool does not implement certain features, it can often be substituted by a 3rd
                            party library. Tools with rich environment of 3rd party libraries often come also with tools
                            enabling easy plugin management. Examples of these can be: Hyperloop by Appcelerator, npm
                            for Apache Cordova and NativeScript plugins, Nuget for Xamarin packages or motion-toolbox
                            for RubyMotion gems.
                        </small>
                    </li>
                    <li>
                        <strong>What IDEs do your developers use?</strong>
                        <br/>
                        <small>Although this may not be as critical, the familiarity with an IDE or other
                            productivity-boosting software may increase the development speed. Also, reusing an already
                            licensed software will cut the costs.
                        </small>
                    </li>
                    <li>
                        <strong>Do you have specialists for individual mobile operating systems?</strong>
                        <br/>
                        <small>As mentioned already multiple times in this thesis, each mobile OS has a different way of
                            handling the app lifecycle. There are differences in communication with the kernel,
                            interactions between apps and handling navigation. There is inconsistency in available APIs,
                            sensors, widgets and varying guidelines to UX and UI design. Some development tools shield
                            you off these differences, focusing on the least common denominator. Others let you leverage
                            the platform-specific features to the full extent.
                            <br/>
                            Having developers specialized for individual operating systems allows you to use the
                            platform-specific approach. While most development tools allow platform-specific overrides,
                            it is default only for RubyMotion and Xamarin (partially also for Appcelerator, React Native
                            and NativeScript). The former approach, where platform-specifics are shielded off (known
                            also as the WORA approach) is used by all other tools, as well as Xamarin.Forms.
                        </small>
                    </li>
                    <li>
                        <strong>What is the size of the resulting apps?</strong>
                    </li>
                    <li>
                        <strong>What is the learning curve?</strong>
                    </li>
                    <li>
                        <strong>How long does it take to create a simple app? How long does it take to master the
                            tool?</strong>
                    </li>
                    <li>
                        <strong>How often is the tool updated? How long does it take to react to a new OS
                            release?</strong>
                    </li>
                    <li>
                        <strong>How comprehensive is the documentation?</strong>
                    </li>
                    <li>
                        <strong>How large and how busy is the community?</strong>
                    </li>
                    <li>
                        <strong>How buggy is the tool? How are bugs handled?</strong>
                    </li>
                    <li>
                        <strong>What are some prominent apps developed using the tool?</strong>
                    </li>
                </ul>

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
                        className="btn btn-default"
                        onClick={() => {
                            this.props.resetAnswers();
                            this.props.resetSteps();
                        }}>
                        Back to main page
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

export default connect(mapStateToProps, {
    previousStep: previousStep,
    resetSteps: resetSteps,
    resetAnswers: resetAnswers})(S13);