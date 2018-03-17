/// <reference path="validation.ts" />
/// <reference path="lettersonlyvalidator.ts" />
/// <reference path="zipcodevalidator.ts" />

// Testdaten
var strings = ['Hello', '98052', '101'];
// Validatoren
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Auswertung
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' passt ' : ' passt nicht ') + name);
    }
});