function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

module buildLabel {
  export var suffix = "";
  export var prefix = "Hallo ";
}

console.log(buildLabel("Joerg<IsAGeek>"));
