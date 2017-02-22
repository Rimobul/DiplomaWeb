import React, {Component} from 'react';
import {getBackgroundClass, yesNo, renderComment} from './utils';


export default class PlatformsReport extends Component {
    constructor(props){
        super(props);

        this.framework = props.framework;
        this.answers = props.answers;
    }

    render(){
        return(
            <tbody>
                <tr className={getBackgroundClass(this.answers.android, this.framework.mobileOs.android[0])}>
                    <td>Android</td>
                    <td>{yesNo(this.framework.mobileOs.android[0])}</td>
                    {renderComment(this.framework.mobileOs.android[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.blackBerry, this.framework.mobileOs.blackBerry[0])}>
                    <td>BlackBerry</td>
                    <td>{yesNo(this.framework.mobileOs.blackBerry[0])}</td>
                    {renderComment(this.framework.mobileOs.blackBerry[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.ios, this.framework.mobileOs.ios[0])}>
                    <td>iOS</td>
                    <td>{yesNo(this.framework.mobileOs.ios[0])}</td>
                    {renderComment(this.framework.mobileOs.ios[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.windowsPhone, this.framework.mobileOs.windows[0])}>
                    <td>Windows</td>
                    <td>{yesNo(this.framework.mobileOs.windows[0])}</td>
                    {renderComment(this.framework.mobileOs.windows[1])}
                </tr>
            </tbody>
        );
    }
}