import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addScore} from '../../actions/index';
import Question from '../question';
import {evaluatePoints} from './utils';

class S11 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openGl: false,
            games: false,
            avr: false
        }
    }

    getScoreArray(){
        const scoreArray = this.props.scoredFrameworks.map(f => {
            let points = 0;
            if(this.state.openGl){
                points += evaluatePoints(f.openGl[0], 1);
            }
            if(this.state.games){
                points += evaluatePoints(f.games[0], 1);
            }
            if(this.state.avr){
                points += evaluatePoints(f.augmentedVirtual[0], 1);
            }
            return {name: f.name, points: points};
        });

        return scoreArray;
    }

    render(){
        return(
            <div>
                <Question
                    question="Is OpenGL or WebGL required?"
                    note="There are some applications that may find use in hardware-accelerated 3D graphics. A model
                    catalogue, design studio or a game are some examples of this kind of apps. Rendering and managing a
                    3D object requires the use of OpenGL library specialized for mobile or web environment. Most tools
                    support the integration of either OpenGL ES or WebGL. However, Aquro, Instant Developer, Smartface
                    and ViziApps are exceptions to this rule.">
                    <input type="radio"
                           name="openGl"
                           value="Yes"
                           checked={this.state.openGl}
                           onChange={() => this.setState({openGl: true})}/>Yes<br />
                    <input type="radio"
                           name="openGl"
                           value="No"
                           checked={!this.state.openGl}
                           onChange={() => this.setState({openGl: false})}/>No<br />
                </Question>

                <Question
                    question="Is the support for creating 2D games necessary?"
                    note="Although for a full-featured game development a mobile game framework would be more suitable,
                    some multi-platform development tools are mature enough to host a simple 2D game. Examples of them
                    can be Corona Labs, Kivy, Qt or Xamarin.">
                    <input type="radio"
                           name="games"
                           value="Yes"
                           checked={this.state.games}
                           onChange={() => this.setState({games: true})}/>Yes<br />
                    <input type="radio"
                           name="games"
                           value="No"
                           checked={!this.state.games}
                           onChange={() => this.setState({games: false})}/>No<br />
                </Question>

                <Question
                    question="Will the project include augmented or virtual reality?"
                    note="Although augmented and virtual reality applications are dominated by games, various utility
                    and even business apps are getting still more popular as well. Implementing one of these
                    technologies might be exactly the thing that will set your app apart from the competition.">
                    <input type="radio"
                           name="avr"
                           value="Yes"
                           checked={this.state.avr}
                           onChange={() => this.setState({avr: true})}/>Yes<br />
                    <input type="radio"
                           name="avr"
                           value="No"
                           checked={!this.state.avr}
                           onChange={() => this.setState({avr: false})}/>No<br />
                </Question>

                <div>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            this.props.addScore(this.props.scoredFrameworks, this.getScoreArray());
                            this.props.nextStep(this.props.currentStep)
                        }}>
                        Continue
                        <span className="glyphicon glyphicon-play"/>
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

export default connect(mapStateToProps, { nextStep: nextStep, addScore: addScore })(S11);