class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string; 
}

class Animal {
  keeper: BeeKeeper | ZooKeeper;
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper = {
      hasMask: false
  };
}

class Lion extends Animal {
  keeper: ZooKeeper = {
      nametag: 'Robert'
  };
}

function findKeeper<A extends Animal, K> (a: {
          new(): A; 
          prototype: {keeper: K}}): K {
  var animal: Animal = new a();
  return <any>animal.keeper;
}

var keeperA = findKeeper(Lion);
console.log(keeperA.nametag);

var keeperB = findKeeper(Bee);
console.log(keeperB.hasMask);