import React, {Component} from 'react';
import Question from '../question';

export default class S1 extends Component {
    render() {
        return (
            <div>
                <Question
                    question="Which mobile operating systems do you want to target?"
                    note=""
                    answers="Android, iOS, Windows, BlackBerry" />
                <Question
                    question="On which desktop operating systems do you want to develop?"
                    note=""
                    answers="Linux, macOS, Windows, web environment" />
            </div>
        );
    };
}