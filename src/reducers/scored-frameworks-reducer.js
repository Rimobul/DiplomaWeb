import {SCORED_FRAMEWORKS} from '../actions/index';
import {isNullOrTrue, answersMatrixValue, isEqualOrMore} from '../components/steps/utils';

function satisfiesPriceLimit(framework, teamSize, priceLimit) {
    let realPrice = 0;
    switch (teamSize) {
        case 1:
            realPrice = framework.prices.indie;
            break;
        case 5:
            realPrice = framework.prices.to5;
            break;
        case 10:
            realPrice = framework.prices.to10;
            break;
        case 25:
            realPrice = framework.prices.to25;
            break;
        case 50:
            realPrice = framework.prices.enterpriseLow;
            break;
        case 100:
            realPrice = framework.prices.enterpriseHigh;
            break;
    }

    if (realPrice == null) {
        return true;
    } else {
        return realPrice <= priceLimit;
    }
}

function canBeDevelopedOnSelectedDesktop(framework, answers) {
    return (answers.linux && isNullOrTrue(framework.desktopOs.linux[0])) ||
        (answers.macOs && isNullOrTrue(framework.desktopOs.macOs[0])) ||
        (answers.windows && isNullOrTrue(framework.desktopOs.windows[0])) ||
        (answers.web && isNullOrTrue(framework.desktopOs.web[0]));
}

export default function (state = [], action) {
    switch (action.type) {
        case SCORED_FRAMEWORKS:
            const scoreArray = action.payload.frameworks.filter(f =>
                    // mobile OS
                (!action.payload.answers.android || isNullOrTrue(f.mobileOs.android[0])) &&
                (!action.payload.answers.ios || isNullOrTrue(f.mobileOs.ios[0])) &&
                (!action.payload.answers.blackBerry || isNullOrTrue(f.mobileOs.blackBerry[0])) &&
                (!action.payload.answers.windowsPhone || isNullOrTrue(f.mobileOs.windows[0])) &&
                // desktop OS
                canBeDevelopedOnSelectedDesktop(f, action.payload.answers) &&
                (!action.payload.answers.iOSnonMac || isNullOrTrue(f.desktopOs.iOSnonMac[0])) &&
                (!action.payload.answers.winNonWin || isNullOrTrue(f.desktopOs.winNonWin[0])) &&
                (satisfiesPriceLimit(f, action.payload.answers.size, action.payload.answers.price)) &&
                // UI
                (action.payload.answers.nativeLook ? isNullOrTrue(f.ui.nativeLook[0]) : !isNullOrTrue(f.ui.nativeLook[0])) &&
                (action.payload.answers.singleUi ?
                    f.ui.uiLayers.some(ui => ui === "Single") :
                    f.ui.uiLayers.some(ui => ui === "Custom")) &&
                (!action.payload.answers.multithreading || isNullOrTrue(f.multithreading[0])) &&
                // multimedia
                (!action.payload.answers.camera || isNullOrTrue(f.sensors.camera[0])) &&
                (!action.payload.answers.microphone || isNullOrTrue(f.sensors.microphone[0])) &&
                (!action.payload.answers.video || isNullOrTrue(f.apis.video[0])) &&
                (!action.payload.answers.audio || isNullOrTrue(f.apis.audio[0])) &&
                // location
                (!action.payload.answers.gps || isNullOrTrue(f.sensors.geolocation[0])) &&
                (!action.payload.answers.accelerometer || isNullOrTrue(f.sensors.accelerometer[0])) &&
                (!action.payload.answers.gyro || isNullOrTrue(f.sensors.gyroscope[0])) &&
                // other
                (!action.payload.answers.deviceState || isNullOrTrue(f.apis.deviceStatus[0])) &&
                (!action.payload.answers.background || isNullOrTrue(f.backgrounding[0])) &&
                (!action.payload.answers.push || isNullOrTrue(f.apis.pushNotifications[0])) &&
                (!action.payload.answers.invokeNative || isNullOrTrue(f.invokeNative[0])) &&
                (!action.payload.answers.crash || isNullOrTrue(f.testing.appMonitoring[0]))
            );

            return scoreArray.map(f => {
                let points = 0;
                // mobile OS
                points += answersMatrixValue(action.payload.answers.android, f.mobileOs.android[0], 7);
                points += answersMatrixValue(action.payload.answers.ios, f.mobileOs.ios[0], 7);
                points += answersMatrixValue(action.payload.answers.windowsPhone, f.mobileOs.windows[0], 7);
                points += answersMatrixValue(action.payload.answers.blackBerry, f.mobileOs.blackBerry[0], 7);
                // desktop OS
                points += answersMatrixValue(action.payload.answers.linux, f.desktopOs.linux[0], 7);
                points += answersMatrixValue(action.payload.answers.macOs, f.desktopOs.macOs[0], 7);
                points += answersMatrixValue(action.payload.answers.windows, f.desktopOs.windows[0], 7);
                points += answersMatrixValue(action.payload.answers.web, f.desktopOs.web[0], 7);
                points += answersMatrixValue(action.payload.answers.iOSnonMac, f.desktopOs.iOSnonMac[0], 7);
                points += answersMatrixValue(action.payload.answers.winNonWin, f.desktopOs.winNonWin[0], 7);
                // step 2
                points += answersMatrixValue(action.payload.answers.multithreading, f.multithreading[0], 7);
                points += answersMatrixValue(action.payload.answers.camera, f.sensors.camera[0], 7);
                points += answersMatrixValue(action.payload.answers.microphone, f.sensors.microphone[0], 7);
                points += answersMatrixValue(action.payload.answers.video, f.apis.video[0], 7);
                points += answersMatrixValue(action.payload.answers.audio, f.apis.audio[0], 7);
                points += answersMatrixValue(action.payload.answers.gps, f.sensors.geolocation[0], 7);
                points += answersMatrixValue(action.payload.answers.accelerometer, f.sensors.accelerometer[0], 7);
                points += answersMatrixValue(action.payload.answers.gyro, f.sensors.gyroscope[0], 7);
                points += answersMatrixValue(action.payload.answers.deviceState, f.apis.deviceStatus[0], 7);
                // step 3
                points += answersMatrixValue(action.payload.answers.background, f.backgrounding[0], 7);
                points += answersMatrixValue(action.payload.answers.push, f.apis.pushNotifications[0], 7);
                points += answersMatrixValue(action.payload.answers.invokeNative, f.invokeNative[0], 7);
                points += answersMatrixValue(action.payload.answers.crash, f.testing.appMonitoring[0], 7);
                // step 5
                points += isEqualOrMore(action.payload.answers.complex, f.performance, 5);
                points += answersMatrixValue(action.payload.answers.designer, f.ui.designer[0], 5);
                points += answersMatrixValue(action.payload.answers.tablet, f.ui.tabletLayout[0], 5);
                points += answersMatrixValue(action.payload.answers.osOverrides, f.osOverrides[0], 5);
                // step 6
                points += answersMatrixValue(action.payload.answers.files, f.apis.fileSystem[0], 5);
                points += answersMatrixValue(action.payload.answers.couchbase, f.databases.some(d => d === "Couchbase"), 5);
                points += answersMatrixValue(action.payload.answers.realm, f.databases.some(d => d === "Realm"), 5);
                points += answersMatrixValue(action.payload.answers.sqlite, f.databases.some(d => d === "SQLite"), 5);
                points += answersMatrixValue(action.payload.answers.otherDb, f.databases.some(d => d != "SQLite" &&
                    d != "Realm" && d != "Couchbase"), 5);
                points += answersMatrixValue(action.payload.answers.bluetooth, f.sensors.bluetooth[0], 5);
                points += answersMatrixValue(action.payload.answers.nfc, f.sensors.nfc[0], 5);
                points += answersMatrixValue(action.payload.answers.fingerprint, f.sensors.fingerprint[0], 5);
                points += answersMatrixValue(action.payload.answers.barcode, f.sensors.barcode[0], 5);
                points += answersMatrixValue(action.payload.answers.alexa, f.assistants.some(d => d === "Alexa"), 5);
                points += answersMatrixValue(action.payload.answers.cortana, f.assistants.some(d => d === "Cortana"), 5);
                points += answersMatrixValue(action.payload.answers.now, f.assistants.some(d => d === "GoogleAssistant"), 5);
                points += answersMatrixValue(action.payload.answers.siri, f.assistants.some(d => d === "Siri"), 5);
                // step 7
                points += answersMatrixValue(action.payload.answers.debug, f.testing.debugging[0], 5);
                points += answersMatrixValue(action.payload.answers.unit, f.testing.unitTest[0], 5);
                points += answersMatrixValue(action.payload.answers.uiTesting, f.testing.uiTest[0], 5);
                points += answersMatrixValue(action.payload.answers.profiling, f.testing.appProfiling[0], 5);
                // step 9
                points += answersMatrixValue(action.payload.answers.angular, f.languages.some(l => l === "Angular"), 3);
                points += answersMatrixValue(action.payload.answers.basic, f.languages.some(l => l === "BASIC"), 3);
                points += answersMatrixValue(action.payload.answers.cpp, f.languages.some(l => l === "C++"), 3);
                points += answersMatrixValue(action.payload.answers.csharp, f.languages.some(l => l === "C#"), 3);
                points += answersMatrixValue(action.payload.answers.delphi, f.languages.some(l => l === "Delphi"), 3);
                points += answersMatrixValue(action.payload.answers.js, f.languages.some(l => l === "JavaScript"), 3);
                points += answersMatrixValue(action.payload.answers.java, f.languages.some(l => l === "Java"), 3);
                points += answersMatrixValue(action.payload.answers.lua, f.languages.some(l => l === "Lua"), 3);
                points += answersMatrixValue(action.payload.answers.python, f.languages.some(l => l === "Python"), 3);
                points += answersMatrixValue(action.payload.answers.react, f.languages.some(l => l === "React"), 3);
                points += answersMatrixValue(action.payload.answers.ruby, f.languages.some(l => l === "Ruby"), 3);
                points += answersMatrixValue(action.payload.answers.codefree, f.languages.some(l => l === "Code-free"), 3);
                points += answersMatrixValue(action.payload.answers.mbaas, f.mbaas[0], 3);
                points += answersMatrixValue(action.payload.answers.browser, f.apis.embeddedBrowser[0], 3);
                points += answersMatrixValue(action.payload.answers.call,
                    isNullOrTrue(f.apis.addressBook[0]) && isNullOrTrue(f.apis.callSms[0]), 3);
                // step 10
                points += answersMatrixValue(action.payload.answers.multitest, f.testing.multiTesting[0], 3);
                points += answersMatrixValue(action.payload.answers.ci, f.testing.ci[0], 3);
                points += answersMatrixValue(action.payload.answers.closedGroups, f.testing.groupShipping[0], 3);
                // step 11
                points += answersMatrixValue(action.payload.answers.openGl, f.openGl[0], 3);
                points += answersMatrixValue(action.payload.answers.games, f.games[0], 3);
                points += answersMatrixValue(action.payload.answers.avr, f.augmentedVirtual[0], 3);

                f.score = points;
                return f;
            });
            break;
    }

    return state;
}