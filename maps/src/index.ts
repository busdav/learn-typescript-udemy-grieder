// When do we use curly braces for import statements? If, in the exporting file, we only use `export`, then we need to use curly braces in the
// importing file. That also allows us to safely import more than one object from the exporting file, by e.g. `{ User, House }`. I believe this is
// plain ES2015, and that's why it's also in react; and I believe TS just replicates this. If we use the default keyword, as in `export default`,
// then we don't need to put curly braces. The exporting file will then just export whatever we assigned to the `default` keyword.
// Note that in the importing file, we don't have to call it the same name - we can import the `default` exported object under a different name.
// This is because, we also don't give a NAME to what we export in `export default` - we essentially just say "export by default the following thing: ..."
// This is different with just `export`, where we give a name to what we export.
// Note that in TS world, convention is to NOT use the `default` keyword, and therefore always use curly braces.

import { User } from "./User";
import { Company } from "./Company";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);
