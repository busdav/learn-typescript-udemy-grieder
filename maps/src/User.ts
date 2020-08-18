/* 
We needed to manually install the @types/faker type definition file for the faker npm module,
so that TS knows what types all methods, variables etc.the faker module has.
Sometimes, an npm module would come with a type definition file included. If not, we can search for a type definition file on
npmjs.com. The naming convention is "@types/moduleName".
If we hover now over `faker` and press command key, we can open that type definition file - almost serves as sort of a documentation.
*/
import faker from "faker";
/* 
Why do we make Mappable exportable in CustomMap.ts and then import it here, and specify that User `implements Mappable`? 
It's not theoretically required for TS to indicate errors when we are breaching the requirements of the Mappable interface.
When we called CustomMap.addMarker() in index.ts, which requires the argument to 
satify the interface Mappable, TS would already show us an error if the argument wasn't of Mappable. But, the reason why we want to import it 
here is: We want TS to display an error to us where it is most helpful. If the error is displayed in index.ts only, 
where we CALL CustomMpa.addMarker(), then TS is not displaying the error where we actually MADE it. Because, we MADE the error HERE, 
in User.ts, so we want TS to indicate the error right here, in the same file. 
Now we declare our intention to TS that we want to make sure that an instance of the class User satisfies all the properties 
required by the interface `Mappable`. We do that because eventually, we want to use User as an argument to CustomMap.addMarker(). 
This sets up a direct dependency between our User class and the CustomMap class (technically the CustomMap.ts file).
So, this helps TS (AND OTHER ENGINEERS) understand what we are trying to do, even though it is NOT required to do. So, what we're doing here is, 
we OPTIONALLY CHOOSE to implement an interface. 
*/
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.findName();
    /* 
    because all properties of a class need to be initialized, and because just by saying, above, that the `location` property will be an object,
    we haven't initialized it yet AS an object, we can't just do, directly, `this.location.lat = ...`, because at this point, `this.location`
    is still null or undefined. Above, we only tell TS, "this is what 'location' will BE".
    */
    this.location = {
      // We need to use parseFloat to get to a number, becuase according to faker type definition file, address.latitude() returns a string
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
