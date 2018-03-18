function log(target: Object, key: string, descriptor: any) {
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

class Example {
  
  @log
  oneFunction(n: number) {
    return n * 2;
  }
}

let e = new Example();
e.oneFunction(23);