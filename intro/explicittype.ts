interface SomeType {
  label: string;
}

function printExLabel(val: SomeType) {
  console.log(val.label);
}

var labelType = {
    size: 10, 
    label: "Beschreibung"
};
printExLabel(labelType);