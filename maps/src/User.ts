// We needed to manually install the @types/faker type definition file for the faker npm module,
// so that TS knows what types all methods, variables etc.the faker module has.
// Sometimes, an npm module would come with a type definition file included.
import faker from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {}
}
