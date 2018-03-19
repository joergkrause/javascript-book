import 'reflect-metadata';

function logAllProperty(target: any, key: string) {
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

function logAllMethod(target: Object, key: string, descriptor: any) {
  return {
    value: function (...args: any[]) {
      var a = args.map(a => JSON.stringify(a)).join();
      var result = descriptor.value.apply(this, args);
      var r = JSON.stringify(result);
      console.log(`Call: ${key}(${a}) => ${r}`);
      return result;
    }
  };
}

function logAllParameter(target: any, key: string, index: number) {
  var indices = Reflect.getMetadata(`log_${key}_parameters`, target, key) || [];
  indices.push(index); 
  Reflect.defineMetadata(`log_${key}_parameters`, indices, target, key);
}

function logAllClass(target: any) {
  // Konstruktor merken
  var original = target;
  // Unterstützung der Instanziierung
  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }
  // Unterstützung des Konstruktors
  var f : any = function (...args) {
    console.log("New: " + original.name); 
    return construct(original, args);
  }
  // Ursprüngliche Vererbung kopieren 
  f.prototype = original.prototype;
  // Neuer Konstruktor
  return f;
}

function logAll(...args : any[]) {
  // Fix für Property
  if (args.length === 3 && args[2] === undefined){
    args.pop();
  }
  switch(args.length) {
    case 1:
      return logAllClass.apply(args[0], args);
    case 2:
      return logAllProperty.apply(args[0], args);
    case 3:
      if(typeof args[2] === "number") {
        return logAllParameter.apply(args[0], args);
      }
      return logAllMethod.apply(args[0], args);
    default:
      throw new Error("Decorators are not valid here! ");
  }
}

@logAll
class AllPerson { 

  @logAll
  public name: string;

  @logAll
  public surname: string;

  constructor(n : string, sn : string) { 
    this.name = n;
    this.surname = sn;
  }

  @logAll
  public saySomething(@logAll something : string) : string { 
    return this.name + " " + this.surname + " says: " + something; 
  }
}

const allPerson = new AllPerson("Alwin", "All");
allPerson.saySomething("Hallo");