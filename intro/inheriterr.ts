class Animal {
  private name:string;
  constructor(theName: string) { 
    this.name = theName; 
  }
}

class Rhino extends Animal {
constructor() { super("Rhino"); }
}

class Employee {
  private name:string;
  constructor(theName: string) { 
    this.name = theName;
  }	
}

var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");

animal = rhino;
animal = employee; // --> Fehler