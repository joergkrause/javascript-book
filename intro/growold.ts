function Person(age) {
  this.age = age
  this.growOld = () => { this.age++; }
}
let p = new Person(51);
p.growOld()
p.growOld()
console.log(p.age);