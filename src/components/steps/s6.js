import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addScore} from '../../actions/index';
import Question from '../question';

class S6 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: false,
            couchbase: false,
            realm: false,
            sqlite: false,
            otherDb: false,
            bluetooth: false,
            nfc: false,
            fingerprint: false,
            barcode: false,
            alexa: false,
            cortana: false,
            now: false,
            siri: false
        }
    }

    getScoreArray(){
        const scoreArray = this.props.scoredFrameworks.map(f => {
            let points = 0;
            if(this.state.files){
                points += evaluatePoints(f.apis.fileSystem[0], 5);
            }
            if(this.state.couchbase){
                points += evaluatePoints(f.databases.some(d => d === "Couchbase"), 5);
            }
            if(this.state.realm){
                points += evaluatePoints(f.databases.some(d => d === "Realm"), 5);
            }
            if(this.state.sqlite){
                points += evaluatePoints(f.databases.some(d => d === "SQLite"), 5);
            }
            if(this.state.otherDb){
                points += evaluatePoints(f.databases.some(d => d != "SQLite" && d != "Realm" && d != "Couchbase"), 5);
            }
            if(this.state.bluetooth){
                points += evaluatePoints(f.sensors.bluetooth[0], 5);
            }
            if(this.state.nfc){
                points += evaluatePoints(f.sensors.nfc[0], 5);
            }
            if(this.state.fingerprint){
                points += evaluatePoints(f.sensors.fingerprint[0], 5);
            }
            if(this.state.barcode){
                points += evaluatePoints(f.sensors.barcode[0], 5);
            }
            if(this.state.alexa){
                points += evaluatePoints(f.assistants.some(d => d === "Alexa"), 5);
            }
            if(this.state.cortana){
                points += evaluatePoints(f.assistants.some(d => d === "Cortana"), 5);
            }
            if(this.state.now){
                points += evaluatePoints(f.assistants.some(d => d === "GoogleAssistant"), 5);
            }
            if(this.state.siri){
                points += evaluatePoints(f.assistants.some(d => d === "Siri"), 5);
            }
            return {name: f.name, points: points};
        });

        return scoreArray;
    }

    render(){
        return(
            <div>
                <Question
                    question="Will the application work with the file system?"
                    note="All studied development tools provide access to the file system, although there might be some
                    restrictions for Qt and hybrid apps. It is worth mentioning, that the file system structure differs
                    a lot on Android, iOS and Windows.">
                    <input type="radio"
                           name="files"
                           value="Yes"
                           checked={this.state.files}
                           onChange={() => this.setState({files: true})}/>Yes<br />
                    <input type="radio"
                           name="files"
                           value="No"
                           checked={!this.state.files}
                           onChange={() => this.setState({files: false})}/>No<br />
                </Question>

                <Question
                    question="Will the application require persistent storage? What type of database do you prefer?"
                    note="Excluding file system, Android, iOS and Windows offer 2 different approaches to data
                    persistence. Simple key-value data pairs, such as the current application state or settings are
                    usually saved in the app properties (SharedPreferences/NSUserDefaults/ApplicationDataContainer).
                    More complex data structures are usually stored in a database. The most common database used in
                    mobile world is SQLite, which has almost universal support across the studied tools. Couchbase and
                    Realm are examples of other popular mobile database engines, also supported by several tools. Aquro
                    and ViziApps are the only two multi-platform development tools not allowing any client-side data
                    storage, since they rely on all data being stored in the cloud.">
                    <input type="checkbox"
                           checked={this.state.couchbase}
                           onClick={() => this.setState({couchbase: !this.state.couchbase})}/>
                    CouchBase<br />
                    <input type="checkbox"
                           checked={this.state.realm}
                           onClick={() => this.setState({realm: !this.state.realm})}/>
                    Realm<br/>
                    <input type="checkbox"
                           checked={this.state.sqlite}
                           onClick={() => this.setState({sqlite: !this.state.sqlite})}/>
                    SQLite<br/>
                    <input type="checkbox"
                           checked={this.state.otherDb}
                           onClick={() => this.setState({otherDb: !this.state.otherDb})}/>
                    Other<br/>
                </Question>

                <Question
                    question="Do you want to use Bluetooth, NFC, fingerprint or barcode scanner?"
                    note="Unlike the other sensors, Bluetooth, NFC and fingerprint scanners are not software-related,
                    but depend on the hardware outfit. This makes their availability fragmented even within an
                    operating system. Only a small portion of studied tools provide the functionality out-of-the box.
                    The majority relies on 3rd party libraries, or custom wrappers invoking native functionality. This
                    is true also for the barcode or QR scanner - although it is captured by camera, it is processed
                    usually by the native API.">
                    <input type="checkbox"
                           checked={this.state.bluetooth}
                           onClick={() => this.setState({bluetooth: !this.state.bluetooth})}/>
                    Bluetooth<br />
                    <input type="checkbox"
                           checked={this.state.nfc}
                           onClick={() => this.setState({nfc: !this.state.nfc})}/>
                    NFC<br/>
                    <input type="checkbox"
                           checked={this.state.fingerprint}
                           onClick={() => this.setState({fingerprint: !this.state.fingerprint})}/>
                    Fingerprint scanner<br/>
                    <input type="checkbox"
                           checked={this.state.barcode}
                           onClick={() => this.setState({barcode: !this.state.barcode})}/>
                    Barcode or QR-code scanner<br/>
                </Question>

                <Question
                    question="Is integration with assistant service (Alexa, Cortana, Google Assistant, Siri) required?"
                    note="Although the usage of AI-powered virtual assistance is still limited to several use cases and
                    language, their possibilities are growing with each new update. Already now, virtual assistants are
                    able to pick the best suited application for a particular request. If you want your application to
                    be popular, it should communicate with the virtual assistant. Not all tools provide necessary
                    support for this behaviour.">
                    <input type="checkbox"
                           checked={this.state.alexa}
                           onClick={() => this.setState({alexa: !this.state.alexa})}/>
                    Amazon Alexa<br />
                    <input type="checkbox"
                           checked={this.state.cortana}
                           onClick={() => this.setState({cortana: !this.state.cortana})}/>
                    Microsoft Cortana<br/>
                    <input type="checkbox"
                           checked={this.state.now}
                           onClick={() => this.setState({now: !this.state.now})}/>
                    Google Now or Google Assistant<br/>
                    <input type="checkbox"
                           checked={this.state.siri}
                           onClick={() => this.setState({siri: !this.state.siri})}/>
                    Apple Siri<br/>
                </Question>

                <div>
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            this.props.addScore(this.props.filteredFrameworks, this.getScoreArray());
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

export default connect(mapStateToProps, { nextStep: nextStep, addScore: addScore })(S6);