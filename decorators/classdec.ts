function logClass(target: any) {
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

@logClass
class OtherPerson { 

  public name: string;
  public surname: string;

  constructor(name : string, surname : string) { 
    this.name = name;
    this.surname = surname;
  }
}

const o = new OtherPerson("Otto", "Other");