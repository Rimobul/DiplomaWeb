import React, {Component} from 'react';
import {connect} from 'react-redux';
import {nextStep, addScore, addAnswer} from '../../actions/index';
import Question from '../question';
import {evaluatePoints} from './utils';

class S6 extends Component {
    componentDidMount () {
        window.scrollTo(0, 0)
    }

    getScoreArray(){
        const scoreArray = this.props.scoredFrameworks.map(f => {
            let points = 0;
            if(this.props.answers.files){
                points += evaluatePoints(f.apis.fileSystem[0], 5);
            }
            if(this.props.answers.couchbase){
                points += evaluatePoints(f.databases.some(d => d === "Couchbase"), 5);
            }
            if(this.props.answers.realm){
                points += evaluatePoints(f.databases.some(d => d === "Realm"), 5);
            }
            if(this.props.answers.sqlite){
                points += evaluatePoints(f.databases.some(d => d === "SQLite"), 5);
            }
            if(this.props.answers.otherDb){
                points += evaluatePoints(f.databases.some(d => d != "SQLite" && d != "Realm" && d != "Couchbase"), 5);
            }
            if(this.props.answers.bluetooth){
                points += evaluatePoints(f.sensors.bluetooth[0], 5);
            }
            if(this.props.answers.nfc){
                points += evaluatePoints(f.sensors.nfc[0], 5);
            }
            if(this.props.answers.fingerprint){
                points += evaluatePoints(f.sensors.fingerprint[0], 5);
            }
            if(this.props.answers.barcode){
                points += evaluatePoints(f.sensors.barcode[0], 5);
            }
            if(this.props.answers.alexa){
                points += evaluatePoints(f.assistants.some(d => d === "Alexa"), 5);
            }
            if(this.props.answers.cortana){
                points += evaluatePoints(f.assistants.some(d => d === "Cortana"), 5);
            }
            if(this.props.answers.now){
                points += evaluatePoints(f.assistants.some(d => d === "GoogleAssistant"), 5);
            }
            if(this.props.answers.siri){
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
                           checked={this.props.answers.files}
                           onChange={() => this.props.addAnswer(this.props.answers, {files: true})}/>Yes<br />
                    <input type="radio"
                           name="files"
                           value="No"
                           checked={!this.props.answers.files}
                           onChange={() => this.props.addAnswer(this.props.answers, {files: false})}/>No<br />
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
                           checked={this.props.answers.couchbase}
                           onClick={() => this.props.addAnswer(this.props.answers, {couchbase: !this.props.answers.couchbase})}/>
                    CouchBase<br />
                    <input type="checkbox"
                           checked={this.props.answers.realm}
                           onClick={() => this.props.addAnswer(this.props.answers, {realm: !this.props.answers.realm})}/>
                    Realm<br/>
                    <input type="checkbox"
                           checked={this.props.answers.sqlite}
                           onClick={() => this.props.addAnswer(this.props.answers, {sqlite: !this.props.answers.sqlite})}/>
                    SQLite<br/>
                    <input type="checkbox"
                           checked={this.props.answers.otherDb}
                           onClick={() => this.props.addAnswer(this.props.answers, {otherDb: !this.props.answers.otherDb})}/>
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
                           checked={this.props.answers.bluetooth}
                           onClick={() => this.props.addAnswer(this.props.answers, {bluetooth: !this.props.answers.bluetooth})}/>
                    Bluetooth<br />
                    <input type="checkbox"
                           checked={this.props.answers.nfc}
                           onClick={() => this.props.addAnswer(this.props.answers, {nfc: !this.props.answers.nfc})}/>
                    NFC<br/>
                    <input type="checkbox"
                           checked={this.props.answers.fingerprint}
                           onClick={() => this.props.addAnswer(this.props.answers, {fingerprint: !this.props.answers.fingerprint})}/>
                    Fingerprint scanner<br/>
                    <input type="checkbox"
                           checked={this.props.answers.barcode}
                           onClick={() => this.props.addAnswer(this.props.answers, {barcode: !this.props.answers.barcode})}/>
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
                           checked={this.props.answers.alexa}
                           onClick={() => this.props.addAnswer(this.props.answers, {alexa: !this.props.answers.alexa})}/>
                    Amazon Alexa<br />
                    <input type="checkbox"
                           checked={this.props.answers.cortana}
                           onClick={() => this.props.addAnswer(this.props.answers, {cortana: !this.props.answers.cortana})}/>
                    Microsoft Cortana<br/>
                    <input type="checkbox"
                           checked={this.props.answers.now}
                           onClick={() => this.props.addAnswer(this.props.answers, {now: !this.props.answers.now})}/>
                    Google Now or Google Assistant<br/>
                    <input type="checkbox"
                           checked={this.props.answers.siri}
                           onClick={() => this.props.addAnswer(this.props.answers, {siri: !this.props.answers.siri})}/>
                    Apple Siri<br/>
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
        scoredFrameworks: state.scoredFrameworks,
        answers: state.answers
    }
}

export default connect(mapStateToProps, {
    nextStep: nextStep,
    addScore: addScore,
    addAnswer: addAnswer})(S6);