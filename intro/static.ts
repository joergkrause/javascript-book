interface ClockStatic {
  new (hour: number, minute: number);
}

class Clock  {
  currentTime: string;
  constructor(h: number, m: number) { 
    this.currentTime = `${h}:${m}`;
  }
}

var cs: ClockStatic = Clock;
var newClock = new cs(7, 30);

console.log(newClock.currentTime);