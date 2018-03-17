import * as validation from './validation';
import zipcodevalidator from './zipcodevalidator';
import lettersonlyvalidator from './lettersonlyvalidator';

// Beispieldaten
var strings = ['Hallo', '12683', '23'];
// Validatoren
var validators: { [s: string]: validation.StringValidator; } = {};
validators['ZIP code'] = new zipcodevalidator();
validators['Letters only'] = new lettersonlyvalidator();
// Auswertung
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' passt ' : ' passt nicht ') + name);
    }
});