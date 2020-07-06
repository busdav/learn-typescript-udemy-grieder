// Interfaces definition: creates a new type, describing the property names and value types of an object

// Note that any 'optional' attributes don't need to be specified - TS only checks whether e.g. the `summary` property is there,
// you are still able to ADD additional attributes.
// That is why BOTH oldCivic AND drinks are considered to be of type `Reportable`, and can therefore be used with
// the function `printSummary`, even though they represent very different objects. And that feature encourages us to write more resuable code.

interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken? ${vehicle.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);
