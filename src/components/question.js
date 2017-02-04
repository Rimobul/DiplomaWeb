import React, {Component} from 'react';

export default class Question extends Component {
    render(){
        return(
            <div className="question">
                <div className="col-md-8">
                    <div className="question-title">
                        {this.props.question}
                    </div>
                    <div className="answers col-md-10 col-md-offset-2">
                        {this.props.answers}
                    </div>
                </div>
                <div className="note col-md-4">
                    {this.props.note}
                </div>
            </div>
        );
    }
}