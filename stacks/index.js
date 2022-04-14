/**initial index pointing to initial myStack */
// import MyStack from "./MyStack";

// export default function main(app) {
//   // Set default runtime for all functions
//   app.setDefaultFunctionProps({
//     runtime: "nodejs14.x"
//   });

//   new MyStack(app, "my-stack");

//   // Add more stacks
// }

/** first change */

// import StorageStack from "./StorageStack";¸

// export default function main(app) {
//   new StorageStack(app, "storage");
// }

import ApiStack from "./ApiStack";
import StorageStack from "./StorageStack";
export default function main(app) {
  const storageStack = new StorageStack(app, "storage");

  new ApiStack(app, "api", {
    table: storageStack.table,
  });
}
