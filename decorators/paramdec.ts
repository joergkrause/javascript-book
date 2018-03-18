function logParameter(target: any, key: string, index: number) {
  var metadataKey = `log_${key}_parameters`;
  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index);
  } else {
    target[metadataKey] = [index];
  }
  console.log(metadataKey);
}

class ParamPerson {
  public name: string;
  public surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public saySomething(@logParameter something: string): string {
    return this.name + " " + this.surname + " says: " + something;
  }
}

const pp = new ParamPerson("Pamela", "Parameter");
pp.saySomething("super");