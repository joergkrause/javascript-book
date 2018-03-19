import 'reflect-metadata';

function logType(target : any, key : string) {
  var t = Reflect.getMetadata("design:type", target, key);
  console.log(`${key} type: ${t.name}`);
}

class Demo{ 
  @logType
  public attr1 : string;
}

const d = new Demo();