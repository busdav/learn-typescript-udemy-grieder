// We needed to manually install the @types/faker type definition file for the faker npm module,
// so that TS knows what types all methods, variables etc.the faker module has.
// Sometimes, an npm module would come with a type definition file included.
// If we hover now over `faker` and press command key, we can open that type definition file - almost serves as sort of a documentation.
import faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    // because all properties of a class need to be initialized, and because just by saying, above, that the `location` property will be an object,
    // we haven't initialized it yet AS an object, we can't just do, directly, `this.location.lat = ...`, because at this point, `this.location`
    // is still null or undefined. Above, we only tell TS, "this is what 'location' will BE".
    this.location = {
      // We need to use parseFloat to get to a number, becuase according to faker type definition file, address.latitude() returns a string
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
