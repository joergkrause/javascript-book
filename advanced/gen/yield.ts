function* f() {
  yield 1;
  yield* [2, 3];
}
let iterator = f();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);