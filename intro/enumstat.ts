enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function isWeekend(day: Weekday) {
      switch (day) {
          case Weekday.Saturday:
          case Weekday.Sunday:
              return true;
          default:
              return false;
      }
  }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isWeekend(mon));
console.log(Weekday.isWeekend(sun));