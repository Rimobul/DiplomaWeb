import React, {Component} from 'react';
import {getBackgroundClass, yesNo, renderComment, getDatabaseBackgroundClass} from './utils';
import {isNullOrTrue} from '../steps/utils';


export default class ApiReport extends Component {
    constructor(props){
        super(props);

        this.framework = props.framework;
        this.answers = props.answers;
    }

    render(){
        return(
            <tbody>
                <tr className={getBackgroundClass(this.answers.video, this.framework.apis.video[0])}>
                    <td>Playing video</td>
                    <td>{yesNo(this.framework.apis.video[0])}</td>
                    {renderComment(this.framework.apis.video[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.audio, this.framework.apis.audio[0])}>
                    <td>Playing sounds and music</td>
                    <td>{yesNo(this.framework.apis.audio[0])}</td>
                    {renderComment(this.framework.apis.audio[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.deviceState, this.framework.apis.deviceStatus[0])}>
                    <td>Access device state and information</td>
                    <td>{yesNo(this.framework.apis.deviceStatus[0])}</td>
                    {renderComment(this.framework.apis.deviceStatus[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.push, this.framework.apis.pushNotifications[0])}>
                    <td>PUSH notifications</td>
                    <td>{yesNo(this.framework.apis.pushNotifications[0])}</td>
                    {renderComment(this.framework.apis.pushNotifications[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.fileSystem, this.framework.apis.fileSystem[0])}>
                    <td>Access and manage files and folders</td>
                    <td>{yesNo(this.framework.apis.fileSystem[0])}</td>
                    {renderComment(this.framework.apis.fileSystem[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.appProperties, this.framework.apis.appProperties[0])}>
                    <td>Access app properties (SharedPreferences, NSUserDefaults, ApplicationDataContainer)</td>
                    <td>{yesNo(this.framework.apis.appProperties[0])}</td>
                    {renderComment(this.framework.apis.appProperties[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.browser, this.framework.apis.embeddedBrowser[0])}>
                    <td>Embedded browser</td>
                    <td>{yesNo(this.framework.apis.embeddedBrowser[0])}</td>
                    {renderComment(this.framework.apis.embeddedBrowser[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.call,
                    isNullOrTrue(this.framework.apis.addressBook[0]) && isNullOrTrue(this.framework.apis.callSms[0]))}>
                    <td>Access address book, call and send SMS</td>
                    <td>{yesNo(isNullOrTrue(this.framework.apis.addressBook[0]) && isNullOrTrue(this.framework.apis.callSms[0]))}</td>
                    {renderComment(this.framework.apis.addressBook[1])}
                </tr>
                <tr className={getDatabaseBackgroundClass(this.answers, this.framework)}>
                    <td>PUSH notifications</td>
                    <td span="2">{this.framework.databases.join(", ")}</td>
                </tr>
            </tbody>
        );
    }
}