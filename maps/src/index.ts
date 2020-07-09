// Because we're adding google maps as a script directly into our index.html, rather than what we'd normally do in TS (adding dependencies via
// npm and importing them), `google` is available as a global variable throughout our project. But, TS doesn't KNOW about this yet, or about
// the different methods and properties of this `google` object. To help TS understand how this third-party JS library works, we're going to install
// another type definition file, @types/googlemaps.

// The below is a part of typescript and is called a triple slash directive. Triple-slash directives are single-line comments containing
// a single XML tag. The contents of the comment are used as compiler directives. I needed to add this because TS didn't automatically
// use the @types/googlemaps type definition file.
/// <reference types="@types/googlemaps" />

// For module imports, when do we use curly braces for import statements? If, in the exporting file, we only use `export`, then we need to use curly braces in the
// importing file. That also allows us to safely import more than one object from the exporting file, by e.g. `{ User, House }`. I believe this is
// plain ES2015, and that's why it's also in react; and I believe TS just replicates this. If we use the default keyword, as in `export default`,
// then we don't need to put curly braces. The exporting file will then just export whatever we assigned to the `default` keyword.
// Note that in the importing file, we don't have to call it the same name - we can import the `default` exported object under a different name.
// This is because, we also don't give a NAME to what we export in `export default` - we essentially just say "export by default the following thing: ..."
// This is different with just `export`, where we give a name to what we export.
// Note that in TS world, convention is to NOT use the `default` keyword, and therefore always use curly braces.
// import { User } from "./User";
// import { Company } from "./Company";

// The @types/googlemaps index.d.ts file served us a documentation that `google.maps.Map()` requires 1-2 arguments, one of them an HTML element
// that serves the map to be rendered. So we created such an element in index.html and are now referencing it as an argument via a `document` selector.
// Hovering over `.Map` gives us the definition, and we can go to the index.d.ts file by command-clicking. From the definition, we understand
// that the second, optional parameter is an options object.
new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
