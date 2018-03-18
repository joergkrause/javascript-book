function logProperty(target: any, key: string) {
  var _val = this[key];
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };
  var setter = function (newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };
  if (delete this[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}

class Person { 

  @logProperty
  public name: string;
  public surname: string;

  constructor(name : string, surname : string) { 
    this.name = name;
    this.surname = surname;
  }
}

const p = new Person("Detlef", "Decorator");
let thename = p.name;