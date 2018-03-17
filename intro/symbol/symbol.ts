const TheClassName = Symbol();

class C {
    [TheClassName](){
       return "C";
    }
}

let c = new C();
let className = c[TheClassName](); // "C"

console.log(className);