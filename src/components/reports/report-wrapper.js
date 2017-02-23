import React, {Component} from 'react';
import PlatformsReport from './platforms-report';
import DesktopReport from './desktop-report';
import GeneralReport from './general-report';
import PriceReport from './price-report';
import UiReport from './ui-report';
import SensorsReport from './sensors-report';

export default class ReportWrapper extends Component {
    constructor(props){
        super(props);

        this.framework = props.framework;
        this.answers = props.answers;
    }

    render(){
        console.log("ReportWrapper", this.framework, this.answers);
        return(
            <div className="col-md-6" key={this.framework.name}>
                <div className="thumbnail">
                    <a href={this.framework.web} >
                        <div className="box-logo">
                            <img src={this.framework.image} alt={this.framework.name} />
                        </div>
                    </a>
                    <div className="caption">
                        <h2>{this.framework.name}</h2>
                        <br/>
                        <h3>Score: {this.framework.score}</h3>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Mobile platforms</th>
                            </tr>
                        </thead>
                        <PlatformsReport framework={this.framework} answers={this.answers} />
                    </table>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Desktop development platforms</th>
                        </tr>
                        </thead>
                        <DesktopReport framework={this.framework} answers={this.answers} />
                    </table>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>General framework information</th>
                        </tr>
                        </thead>
                        <GeneralReport framework={this.framework} answers={this.answers} />
                    </table>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Pricing</th>
                        </tr>
                        </thead>
                        <PriceReport framework={this.framework} answers={this.answers} />
                    </table>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>UI</th>
                        </tr>
                        </thead>
                        <UiReport framework={this.framework} answers={this.answers} />
                    </table>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Sensors</th>
                        </tr>
                        </thead>
                        <SensorsReport framework={this.framework} answers={this.answers} />
                    </table>
                </div>
            </div>
        );
    }
}