interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Variante 1
loggingIdentity<string>("Das Argument");
// Variante 2
loggingIdentity<{ length: number}>("Das Argument");