class GreeterClass {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hallo " + this.greeting;
  }
}

var greeter: GreeterClass;
greeter = new GreeterClass("Joerg");
console.log(greeter.greet());