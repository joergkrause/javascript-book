class GreeterStat {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return GreeterStat.standardGreeting;
    }
  }
}

var greeter1: GreeterStat;
greeter1 = new GreeterStat();
console.log(greeter1.greet());

var greeterMaker: typeof GreeterStat = GreeterStat;
greeterMaker.standardGreeting = "Hey there!";
var greeter2: GreeterStat = new greeterMaker();
console.log(greeter2.greet());
