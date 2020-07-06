const carMakers = ["ford", "toyota", "chevy"];
const bikeMakers: string[] = [];
const dates = [new Date(), new Date()];

// 2 dimensional arrays (arrays within arrays)
const carsByMake = [["f150"], ["corolla"], ["camaro"]];
const bikesByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map' - because TS knows that car is a string, I get a lot of useful autocompletes, e.g. toUpperCase
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2020-10-10");
importantDates.push(new Date());

// Tuple: array-like structure where each element represents some property of a record
// ORDER of the elements is critical. We have an assumption about the order of elements inside a Tuple.
// Classic JS object:
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// So we don't have to insert the type annotation each time, we can define a type:
// (this is NOT creating an array)
type Drink = [string, boolean, number];

// Tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];
// Using the type:
const pepsi2: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

// We're likely not using tuples often, because it's just often not apparent from the tuple what the elements refer to,
// as opposed to an object. Example:
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
};
