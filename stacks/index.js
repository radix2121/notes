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

import StorageStack from "./StorageStack";

export default function main(app) {
  new StorageStack(app, "storage");
}