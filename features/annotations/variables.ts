let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// Annotation here is `: (i: number) => void`, and it tells TS:
// This function will have one argument of type 'number', and it will return nothing (`void`)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to actually USE annotations (rather than relying on type inference)
// 1) Function that returns the `any` type, such as JSON.parse, which, depending on the argument, could return any type, string, number, object, etc.
// TS has no way of predicting the type, so gives `any` type. And we want to avoid `any` type as much as possible
// (because TS can't do its job of flagging errors on `any`). That's why we'll use a type annotation in such case.
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;
// alternative: let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
