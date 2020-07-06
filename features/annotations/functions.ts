// For functions, we're never going to rely on type inference. Why? Because doing a type annotation might help us avoid errors,
// such as forgetting a return statement, see below.
// Case arrow function:
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  a - b;
};

// Case named function:
function divide(a: number, b: number): number {
  return a / b;
}

// Case anonymous function:
const multiply = function (a: number, b: number): number {
  return a * b;
};

// `void` is for functions without return value (or `undefined` or `null`)
const logger = (message: string): void => {
  console.log(message);
};

// `never` is for cases where we'll never actually reach the end of the function (throwing an error is not completing or returning anything,
// rather, we never execute the function completely because we exit the function early with an error)
// However, this is an edge case, as it is only for functions where FOR CERTAIN we will never reach the end of it.
// If we're simply CATCHING errors in a function, i.e., there is a CHANCE of an error, we would put any of the above types.
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// Destructuring with Annotations
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
