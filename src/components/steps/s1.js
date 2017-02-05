import React, {Component} from 'react';
import {isNullOrTrue} from './utils';
import {connect} from 'react-redux';
import {nextStep, filterFrameworks} from '../../actions/index';
import Question from '../question';

class S1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            android: false,
            ios: false,
            blackBerry: false,
            windowsPhone: false,
            linux: false,
            macOs: false,
            windows: false,
            web: false,
            iOSnonMac: false,
            winNonWin: false,
            size: 1,
            price: 12000
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    satisfiesPriceLimit(framework, teamSize, priceLimit) {
        let realPrice = 0;
        switch (teamSize) {
            case 1:
                realPrice = framework.prices.indie;
                break;
            case 5:
                realPrice = framework.prices.to5;
                break;
            case 10:
                realPrice = framework.prices.to10;
                break;
            case 25:
                realPrice = framework.prices.to25;
                break;
            case 50:
                realPrice = framework.prices.enterpriseLow;
                break;
            case 100:
                realPrice = framework.prices.enterpriseHigh;
                break;
        }

        if (realPrice == null) {
            return true;
        } else {
            return realPrice <= priceLimit;
        }
    }

    canBeDevelopedOnSelectedDesktop(framework) {
        return (this.state.linux && isNullOrTrue(framework.desktopOs.linux[0])) ||
            (this.state.macOs && isNullOrTrue(framework.desktopOs.macOs[0])) ||
            (this.state.windows && isNullOrTrue(framework.desktopOs.windows[0])) ||
            (this.state.web && isNullOrTrue(framework.desktopOs.web[0]));
    }

    getSuitableFrameworks() {
        return this.props.allFrameworks.filter(f =>
            (!this.state.android || isNullOrTrue(f.mobileOs.android[0])) &&
            (!this.state.ios || isNullOrTrue(f.mobileOs.ios[0])) &&
            (!this.state.blackBerry || isNullOrTrue(f.mobileOs.blackBerry[0])) &&
            (!this.state.windowsPhone || isNullOrTrue(f.mobileOs.windows[0])) &&
            this.canBeDevelopedOnSelectedDesktop(f) &&
            (!this.state.iOSnonMac || isNullOrTrue(f.desktopOs.iOSnonMac[0])) &&
            (!this.state.winNonWin || isNullOrTrue(f.desktopOs.winNonWin[0])) &&
            (this.satisfiesPriceLimit(f, this.state.size, this.state.price))
        );
    }

    renderiOSnonMac() {
        if (this.state.ios && !this.state.macOs) {
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
                           checked={this.state.iOSnonMac}
                           onChange={() => this.setState({iOSnonMac: true})}/>Yes<br />
                    <input type="radio"
                           name="iOSnonMac"
                           value="No"
                           checked={!this.state.iOSnonMac}
                           onChange={() => this.setState({iOSnonMac: false})}/>No<br />
                </Question>
            );
        }
    }

    renderWinNonWin() {
        if (this.state.windowsPhone && !this.state.windows) {
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
                           checked={this.state.winNonWin}
                           onChange={() => this.setState({winNonWin: true})}/>Yes<br />
                    <input type="radio"
                           name="winNonWin"
                           value="No"
                           checked={!this.state.winNonWin}
                           onChange={() => this.setState({winNonWin: false})}/>No<br />
                </Question>
            );
        }
    }

    render() {
        const filteredFrameworks = this.getSuitableFrameworks();
        //console.log('S1', filteredFrameworks.map(f => f.name), this.state, filteredFrameworks);

        return (
            <div>
                {filteredFrameworks.length} frameworks satisfy your requirements.

                <Question
                    question="Which mobile operating systems do you want to target?"
                    note="The obvious question is for which operating systems will the application be developed. All tools
                        in our database (and almost all multi-platform development tools in general) allow development
                        for Android and iOS. Development for Windows 10 is also supported by vast majority of tools, or
                        planned, at least. However, development for BlackBerry is getting still more rare.">
                    <input type="checkbox"
                           checked={this.state.android}
                           onClick={() => this.setState({android: !this.state.android})}/>
                    Android<br />
                    <input type="checkbox"
                           checked={this.state.blackBerry}
                           onClick={() => this.setState({blackBerry: !this.state.blackBerry})}/>
                    BlackBerry<br/>
                    <input type="checkbox"
                           checked={this.state.ios}
                           onClick={() => this.setState({ios: !this.state.ios, iOSnonMac: false})}/>
                    iOS<br/>
                    <input type="checkbox"
                           checked={this.state.windowsPhone}
                           onClick={() => this.setState({
                               windowsPhone: !this.state.windowsPhone,
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
                           checked={this.state.linux}
                           onClick={() => this.setState({linux: !this.state.linux})}/>
                    Linux<br />
                    <input type="checkbox"
                           checked={this.state.macOs}
                           onClick={() => this.setState({macOs: !this.state.macOs, iOSnonMac: false})}/>
                    macOS<br/>
                    <input type="checkbox"
                           checked={this.state.windows}
                           onClick={() => this.setState({windows: !this.state.windows, winNonWin: false})}/>
                    Windows<br/>
                    <input type="checkbox"
                           checked={this.state.web}
                           onClick={() => this.setState({web: !this.state.web})}/>
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
                           checked={this.state.size === 1}
                           onChange={() => this.setState({size: 1})}/>I am an indie developer<br />
                    <input type="radio"
                           name="size"
                           value="Small"
                           checked={this.state.size === 5}
                           onChange={() => this.setState({size: 5})}/>Up to 5 developers<br />
                    <input type="radio"
                           name="size"
                           value="Medium"
                           checked={this.state.size === 10}
                           onChange={() => this.setState({size: 10})}/>Up to 10 developers<br />
                    <input type="radio"
                           name="size"
                           value="Large"
                           checked={this.state.size === 25}
                           onChange={() => this.setState({size: 25})}/>Up to 25 developers<br />
                    <input type="radio"
                           name="size"
                           value="XL"
                           checked={this.state.size === 50}
                           onChange={() => this.setState({size: 50})}/>More than 25 developers and I want
                    partial enterprise support<br />
                    <input type="radio"
                           name="size"
                           value="XXL"
                           checked={this.state.size === 100}
                           onChange={() => this.setState({size: 100})}/>More than 25 developers and I want full
                    enterprise support<br />

                    I am willing to pay at most $
                    <input type="number"
                           value={this.state.price}
                           min="0"
                           onChange={event => this.setState({price: event.target.value})}/>
                    per year per developer.
                </Question>

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
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, {nextStep: nextStep, filterFrameworks: filterFrameworks})(S1);