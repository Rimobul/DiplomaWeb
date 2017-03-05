import React, {Component} from 'react';
import {getBackgroundClass, yesNo, renderComment} from './utils';

export default class DesktopReport extends Component {
    constructor(props){
        super(props);

        this.framework = props.framework;
        this.answers = props.answers;
    }

    render() {
        return (
            <tbody>
                <tr className={getBackgroundClass(this.answers.linux, this.framework.desktopOs.linux[0])}>
                    <td>Linux</td>
                    <td>{yesNo(this.framework.desktopOs.linux[0])}</td>
                    {renderComment(this.framework.desktopOs.linux[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.macOs, this.framework.desktopOs.macOs[0])}>
                    <td>macOS</td>
                    <td>{yesNo(this.framework.desktopOs.macOs[0])}</td>
                    {renderComment(this.framework.desktopOs.macOs[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.windows, this.framework.desktopOs.windows[0])}>
                    <td>Windows</td>
                    <td>{yesNo(this.framework.desktopOs.windows[0])}</td>
                    {renderComment(this.framework.desktopOs.windows[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.web, this.framework.desktopOs.web[0])}>
                    <td>Web environment</td>
                    <td>{yesNo(this.framework.desktopOs.web[0])}</td>
                    {renderComment(this.framework.desktopOs.web[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.iOSnonMac, this.framework.desktopOs.iOSnonMac[0])}>
                    <td>Build iOS apps without Mac</td>
                    <td>{yesNo(this.framework.desktopOs.iOSnonMac[0])}</td>
                    {renderComment(this.framework.desktopOs.iOSnonMac[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.winNonWin, this.framework.desktopOs.winNonWin[0])}>
                    <td>Build Windows apps without PC</td>
                    <td>{yesNo(this.framework.desktopOs.winNonWin[0])}</td>
                    {renderComment(this.framework.desktopOs.winNonWin[1])}
                </tr>
            </tbody>
        );
    }
}