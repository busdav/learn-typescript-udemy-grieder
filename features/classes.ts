class Vehicle {
  // usually you either initialize a property like so:
  color: string = "red";
  // // or you initialize it in a constructor function like so, in which case you have to pass it when you create a new instance
  // color2: string;
  // constructor(color: string) {
  //   this.color2 = color;
  // }
  // the above can be refactored as the below, by adding the modifier `public`, which then assigns whatever first argument is passed to a `new` call
  // to an instance of the `color2` property. I.e., the `color2`, by adding `public`, becomes a property of the class Vehicle.
  // If I don't add `public`, then the constructor still takes an argument, but doesn't make that argument a property of the class.
  constructor(public color2: string) {}

  public drive(): void {
    console.log("chugga chugga");
  }
  public honk(): void {
    console.log("beep");
  }
  protected honk2(): void {
    console.log("boop");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // Constructors for derived classes must contain a 'super' call, i.e., a call to the constructor method of the parent class.
    super(color);
  }
  private drive2(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive2();
    this.honk2();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color2);
vehicle.drive();
vehicle.honk();

const car = new Car(4, "yellow");
car.startDrivingProcess();
car.honk();

const vehicle2 = new Vehicle("blue");
// Below will give an error because honk2 has the modifier `protected` (only within class and child class). `private` would be only within class.
// `public` is default. The modifiers don't have to do with security - they are there to make sure that maybe 'dangerous' methods that might breaks stuff
// if used in the wrong way can't be called from anywhere.
// vehicle2.honk2();
