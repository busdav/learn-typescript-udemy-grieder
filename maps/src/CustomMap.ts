// Why are we doing the 'detour' of creating a CustomMap class that creates an instance of the public API class `google.maps.Map`?
// -> If we work with an instance of `google.maps.Map`, then all the methods of that public API class will be available to it. However, we
// haven't checked whether these methods might potentially break our app or not. So, in order to avoid another engineer coming into the project
// and deciding to call these 'dangerous' methods from anywhere, we limit the surface area of our own classes as much as possible; make them as simple as
// possible. Therefore, we sort of 'hide' and confine the calling of the public API class `google.maps.Map` into THIS file, where we make the
// `googleMap` property of our CustomMap class PRIVATE (can only be accessed from WITHIN this class).

// Type definition files:
// Because we're adding google maps as a script directly into our index.html, rather than what we'd normally do in TS (adding dependencies via
// npm and importing them), `google` is available as a global variable throughout our project. But, TS doesn't KNOW about this yet, or about
// the different methods and properties of this `google` object. To help TS understand how this third-party JS library works, we're going to install
// another type definition file, @types/googlemaps.

// The below is a part of typescript and is called a triple slash directive. Triple-slash directives are single-line comments containing
// a single XML tag. The contents of the comment are used as compiler directives. I needed to add this because TS didn't automatically
// use the @types/googlemaps type definition file -> solution if and when that happens.
/// <reference types="@types/googlemaps" />

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // We're typing the value of `googleMap` as an INSTANCE of the public API class `google.maps.Map`. (So, classes in TS can be used to do
  // TWO things, actually: 1, create a new instance of an object, and 2, serve as a type annotation. So, they're simultaneously a VALUE and
  // a TYPE.)
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // The @types/googlemaps index.d.ts file served us a documentation that `google.maps.Map()` requires 1-2 arguments, one of them an HTML element
    // that contains the map to be rendered. So we created such an element in index.html and are now referencing it as an argument via a
    // `document` selector. Hovering over `.Map` gives us the definition, and we can go to the index.d.ts file by command-clicking.
    // From the definition, we understand that the second, optional parameter is an options object.
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }

  // // We could do it this way. TS automatically limits the properties you can call on the arguments to those that exist on EITHER of the classes
  // // User and Company (which comes down to .location.lat and .location.lng). However, what if we want to add FURTHER possible mappables?
  // // We'd then have to add those to the "or" statement, and import them. NOT GREAT! THAT's where the power of interfaces comes in.
  // // The interface is essentially configuration at the top of this file, that gives INSTRUCTIONS as to HOW AN OBJECT can be an ARGUMENT to the
  // // addMarker method. That's essentially what an interface is. It acts as a gatekeeper to a function, and says "you can only be an argument
  // // to this function is you satisfy my requirements".
  // addMarker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }
}
