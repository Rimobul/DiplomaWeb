import React, {Component} from 'react';
import {getBackgroundClass, yesNo, renderComment, getSingleUiBackgroundClass} from './utils';


export default class UiReport extends Component{
    constructor(props){
        super(props);

        this.framework = props.framework;
        this.answers = props.answers;
    }

    render(){
        return(
            <tbody>
                <tr className={getBackgroundClass(this.answers.nativeLook, this.framework.ui.nativeLook[0])}>
                    <td>Native look and feel</td>
                    <td>{yesNo(this.framework.ui.nativeLook[0])}</td>
                    {renderComment(this.framework.ui.nativeLook[1])}
                </tr>
                <tr className={getSingleUiBackgroundClass(this.answers.singleUi, this.framework.ui.uiLayers)}>
                    <td>UI layers for individual platforms</td>
                    <td span="2">{this.framework.ui.uiLayers.join(", ")}</td>
                </tr>
                <tr className={getBackgroundClass(this.answers.designer, this.framework.ui.designer[0])}>
                    <td>Designer or previewer tool available</td>
                    <td>{yesNo(this.framework.ui.designer[0])}</td>
                    {renderComment(this.framework.ui.designer[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.tablet, this.framework.ui.tabletLayout[0])}>
                    <td>Phone/tablet responsive design</td>
                    <td>{yesNo(this.framework.ui.tabletLayout[0])}</td>
                    {renderComment(this.framework.ui.tabletLayout[1])}
                </tr>
            </tbody>
        );
    }
}