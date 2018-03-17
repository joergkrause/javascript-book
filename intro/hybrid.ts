interface Counter {
  (start: number): string;
  interval: number;
  count(): void;
  reset(): void;
  value: number;
}

function counterFactory(): Counter {
  var counter = <Counter>function(start: number) {
    this.interval = start;
  };
  counter.value = 0;
  counter.reset = () => {
    counter.interval = 0;
  };
  counter.count = () => {
    counter.value += this.interval;
  };
  return counter;
}

var c = counterFactory();
c.reset();
c(10);
c.count();
c.count();

console.log(c.value);
