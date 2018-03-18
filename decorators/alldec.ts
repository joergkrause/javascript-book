import 'reflect-metadata';

function logPropertyAll(target: any, key: string) {
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

function logMethodAll(target: Function, key: string, descriptor: any) {
  var originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {

    var metadataKey = `__log_${key}_parameters`;
    var indices = target[metadataKey];

    if (Array.isArray(indices)) { 

      for (var i = 0; i < args.length; i++) { 

        if (indices.indexOf(i) !== -1) { 

          var arg = args[i];
          var argStr = JSON.stringify(arg) || arg.toString();
          console.log(`${key} arg[${i}]: ${argStr}`);
        }
      }
      var result = originalMethod.apply(this, args);
      return result;
    }
    else {

      var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
      var result = originalMethod.apply(this, args);
      var r = JSON.stringify(result);
      console.log(`Call: ${key}(${a}) => ${r}`);
      return result;
    }
  }
  return descriptor;
}

function logParameterAll(target: any, key: string, index: number) {
  var indices = Reflect.getMetadata(`log_${key}_parameters`, target, key) || [];
  indices.push(index); 
  Reflect.defineMetadata(`log_${key}_parameters`, indices, target, key);
}

function logClassAll(target: any) {
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
function alllog(...args : any[]) {
  switch(args.length) {
    case 1:
      return logClassAll.apply(this, args);
    case 2:
      return logPropertyAll.apply(this, args);
    case 3:
      if(typeof args[2] === "number") {
        return logParameterAll.apply(this, args);
      }
      return logMethodAll.apply(this, args);
    default:
      throw new Error("Decorators are not valid here!");
  }
}

@alllog()
class AllPerson { 

  @alllog()
  public name: string;

  public surname: string;

  constructor(name : string, surname : string) { 
    this.name = name;
    this.surname = surname;
  }

  @alllog()
  public saySomething(@alllog() something : string) : string { 
    return this.name + " " + this.surname + " says: " + something; 
  }
}