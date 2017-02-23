import React, {Component} from 'react';
import {getPriceBackgroundClass} from './utils';

export default class PriceReport extends Component{
    constructor(props){
        super(props);

        this.framework = props.framework;
        this.answers = props.answers;
    }

    render(){
        return(
            <tbody>
                <tr className={getPriceBackgroundClass(
                    1,
                    this.answers.size,
                    this.answers.price,
                    this.framework.prices.indie)}>
                    <td>Indie developer</td>
                    <td>${this.framework.prices.indie} per developer per year</td>
                </tr>
                <tr className={getPriceBackgroundClass(
                    5,
                    this.answers.size,
                    this.answers.price,
                    this.framework.prices.to5)}>
                    <td>Company up to 5 developers</td>
                    <td>${this.framework.prices.to5} per developer per year</td>
                </tr>
                <tr className={getPriceBackgroundClass(
                    10,
                    this.answers.size,
                    this.answers.price,
                    this.framework.prices.to10)}>
                    <td>Company up to 10 developers</td>
                    <td>${this.framework.prices.to10} per developer per year</td>
                </tr>
                <tr className={getPriceBackgroundClass(
                    25,
                    this.answers.size,
                    this.answers.price,
                    this.framework.prices.to25)}>
                    <td>Company up to 25 developers</td>
                    <td>${this.framework.prices.to25} per developer per year</td>
                </tr>
                <tr className={getPriceBackgroundClass(
                    50,
                    this.answers.size,
                    this.answers.price,
                    this.framework.prices.enterpriseLow)}>
                    <td>Basic enterprise licence</td>
                    <td>${this.framework.prices.enterpriseLow} per developer per year</td>
                </tr>
                <tr className={getPriceBackgroundClass(
                    100,
                    this.answers.size,
                    this.answers.price,
                    this.framework.prices.enterpriseHigh)}>
                    <td>Full-scale enterprise licence</td>
                    <td>${this.framework.prices.enterpriseHigh} per developer per year</td>
                </tr>
                <tr>
                    <td>Note</td>
                    <td>{this.framework.prices.note}</td>
                </tr>
            </tbody>
        );
    }
}