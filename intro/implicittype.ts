function printLabel(typeWithLabel: {label: string}) {
  console.log(typeWithLabel.label);
}

var labelType = {
    size: 10,
    label: "Beschreibung"
};
printLabel(labelType);