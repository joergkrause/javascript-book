class Greeter {

  constructor(message: string) {
      this.greeting = message;
  }

  greet() {
      return "Hallo " + this.greeting;
  }

  greeting: string;
}

var greeter = new Greeter("Joerg");

console.log(greeter.greet());