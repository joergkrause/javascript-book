interface Tagged {
  _tag: string;
}

class Point {
  constructor(public x: number, public y: number) {}
}

type Constructor<T> = new(...args: any[]) => T;

function Tagged<T extends Constructor<{}>>(Base: T, tag: string) {
  return class extends Base {
      _tag: string;
      constructor(...args: any[]) {
          super(...args);
          this._tag = tag;
      }
  }
}

export type TaggedPoint = Constructor<Tagged> & typeof Point;
const tPoint: TaggedPoint = Tagged(Point, "p");
let p = new tPoint(1,2);
console.log(p._tag);