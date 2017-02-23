import React, {Component} from 'react';
import {getBackgroundClass, yesNo, renderComment, isEqualOrMore} from './utils';

export default class GeneralReport extends Component{
    appPerformanceArray = [
        "Simple, for rapid prototyping.",
        "Medium, for regular business apps.",
        "Complicated, for native-like performance."];

    appPopularityArray = [
      "Very low", "Low", "Medium", "High", "Very high"
    ];

    constructor(props){
        super(props);

        this.framework = props.framework;
        this.answers = props.answers;
    }

    render(){
        return(
            <tbody>
                <tr className={getBackgroundClass(isEqualOrMore(this.answers.complex, this.framework.performance))}>
                    <td>App complexity and performance</td>
                    <td span="2">{this.appPerformanceArray[this.framework.performance]}</td>
                </tr>
                <tr className={getBackgroundClass(this.answers.popularity, this.framework.popularity)}>
                    <td>Popularity of framework</td>
                    <td span="2">{this.appPopularityArray[this.framework.popularity]}</td>
                </tr>
                <tr>
                    <td>Approach</td>
                    <td span="2">{this.framework.approach.join(", ")}</td>
                </tr>
                <tr>
                    <td>Programming language(s)</td>
                    <td span="2">{this.framework.languages.join(", ")}</td>
                </tr>
                <tr className={getBackgroundClass(this.answers.mbaas, this.framework.mbaas[0])}>
                    <td>Integrated cloud services (MBaaS)</td>
                    <td>{yesNo(this.framework.mbaas[0])}</td>
                    {renderComment(this.framework.mbaas[1])}
                </tr>
            </tbody>
        );
    }
}