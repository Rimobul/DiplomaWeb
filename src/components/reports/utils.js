import React from 'react';

export function getDatabaseBackgroundClass(answers, framework) {
    let result = [];
    if(answers.couchbase){
        result.push(framework.databases.some(d => d == "Couchbase"));
    }
    if(answers.realm){
        result.push(framework.databases.some(d => d == "Realm"));
    }
    if(answers.sqlite){
        result.push(framework.databases.some(d => d == "SQLite"));
    }
    if(answers.otherDb){
        result.push(framework.databases.some(d => d != "SQLite" &&
            d != "Realm" && d != "Couchbase"));
    }

    if(result.length == 0){
        return "gray";
    } else if(result.every(item => item)){
        return "green";
    } else if (result.every(item => !item)){
        return "red";
    } else return "yellow";
}

export function getPriceBackgroundClass(expectedCategory, actualCategory, exptectedPrice, actualPrice) {
    if(expectedCategory == actualCategory){
        if(actualPrice <= exptectedPrice){
            return "green";
        } else return "red";
    } else return "gray";
}

export function getSingleUiBackgroundClass(singleUi, possibleArray) {
    if(singleUi){
        return possibleArray.some(a => a == "Single") ? "green" : "red";
    } else {
        return possibleArray.some(a => a == "Custom") ? "green" : "red";
    }
}

export function getBackgroundClass(expected, actual){
    if(expected == null || expected == true){
        if(actual == null){
            return "yellow";
        } else if(actual == true){
            return "green";
        } else return "red";
    } else return "gray";
}

export function yesNo(value) {
    if(value == null){
        return "Partially";
    } else if(value == true){
        return "Yes";
    } else return "No";
}

export function renderComment(comment) {
    if(!comment){
        return <td></td>;
    } else return (
        <td>{comment}</td>
    );
}

export function isEqualOrMore(threshold, actual){
    if(actual < threshold){
        return false;
    } else if (actual === threshold){
        return true;
    } else return null;
}