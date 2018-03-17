class ClockS  {
  static currentTime: string;
  static setTime(h: number, m: number) { 
    ClockS.currentTime = `${h}:${m}`;
  }
}

ClockS.setTime(4, 30);

console.log(ClockS.currentTime);