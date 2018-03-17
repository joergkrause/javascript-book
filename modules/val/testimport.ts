import * as validation from './stringvalidator';
import * as zip  from './zipcodevalidator2';
import * as letters from './lettersonlyvalidator2';

// Beispiel
var strings = ['Hello', '98052', '101'];
// Validatoren
var validators: { [s: string]: validation.StringValidator; } = {};
validators['ZIP code'] = new zip.ZipCodeValidator();
validators['Letters only'] = new letters.LettersOnlyValidator();
// Anzeige
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' passt ' : ' passt nicht ') + name);
    }
});