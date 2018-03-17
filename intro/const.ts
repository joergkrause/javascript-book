const Foo = "FooIntern";
const Bar = "BarIntern";

let x = {
    [Foo]: 100,
    [Bar]: "hello",
};

console.log(x.BarIntern);
console.log(x[Bar]);