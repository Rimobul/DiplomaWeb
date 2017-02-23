import React, {Component} from 'react';
import {getBackgroundClass, yesNo, renderComment} from './utils';

export default class SensorsReport extends Component{
    constructor(props){
        super(props);

        this.framework = props.framework;
        this.answers = props.answers;
    }

    render(){
        return(
            <tbody>
                <tr className={getBackgroundClass(this.answers.camera, this.framework.sensors.camera[0])}>
                    <td>Camera</td>
                    <td>{yesNo(this.framework.sensors.camera[0])}</td>
                    {renderComment(this.framework.sensors.camera[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.microphone, this.framework.sensors.microphone[0])}>
                    <td>Microphone</td>
                    <td>{yesNo(this.framework.sensors.microphone[0])}</td>
                    {renderComment(this.framework.sensors.microphone[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.gps, this.framework.sensors.geolocation[0])}>
                    <td>Geolocation</td>
                    <td>{yesNo(this.framework.sensors.geolocation[0])}</td>
                    {renderComment(this.framework.sensors.geolocation[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.accelerometer, this.framework.sensors.accelerometer[0])}>
                    <td>Accelerometer</td>
                    <td>{yesNo(this.framework.sensors.accelerometer[0])}</td>
                    {renderComment(this.framework.sensors.accelerometer[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.gyro, this.framework.sensors.gyroscope[0])}>
                    <td>Gyroscope</td>
                    <td>{yesNo(this.framework.sensors.gyroscope[0])}</td>
                    {renderComment(this.framework.sensors.gyroscope[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.bluetooth, this.framework.sensors.bluetooth[0])}>
                    <td>Bluetooth</td>
                    <td>{yesNo(this.framework.sensors.bluetooth[0])}</td>
                    {renderComment(this.framework.sensors.bluetooth[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.nfc, this.framework.sensors.nfc[0])}>
                    <td>NFC</td>
                    <td>{yesNo(this.framework.sensors.nfc[0])}</td>
                    {renderComment(this.framework.sensors.nfc[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.fingerprint, this.framework.sensors.fingerprint[0])}>
                    <td>Fingerprint scanner</td>
                    <td>{yesNo(this.framework.sensors.fingerprint[0])}</td>
                    {renderComment(this.framework.sensors.fingerprint[1])}
                </tr>
                <tr className={getBackgroundClass(this.answers.barcode, this.framework.sensors.barcode[0])}>
                    <td>Barcode scanner</td>
                    <td>{yesNo(this.framework.sensors.barcode[0])}</td>
                    {renderComment(this.framework.sensors.barcode[1])}
                </tr>
            </tbody>
        );
    }
}