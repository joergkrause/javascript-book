class Animal {
  name:string;
  constructor(theName: string) { 
    this.name = theName; 
  }
  move(meters: number = 0) {
    console.log(this.name + " bewegte sich " + meters + " m.");
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(meters = 5) {
    console.log("Schlängeln...");
    super.move(meters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(meters = 45) {
    console.log("Galoppieren...");
    super.move(meters);
  }
}

var sch = new Snake("Eine Schlange");
var pfd: Animal = new Horse("Ein Pferd");

sch.move();
pfd.move(34);