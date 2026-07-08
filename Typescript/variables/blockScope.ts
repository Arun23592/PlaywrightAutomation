function exampleLetConst(){
  if(true){
    let messageLet = "Hello, world with let";
    const messageConst = "Hello, world with const";
    console.log(messageLet); // Accessible here
    console.log(messageConst); // Accessible here
  }
}

exampleLetConst();



/**
 * 
 * 
 * let:
 * - Block-scoped variable declaration.
 * - Cannot be redeclared in the same scope.
 * - Can be updated (reassigned) but not redeclared.
 * - Example:
 *   let x = 10;
 *  x = 20; // Valid
 * *  let x = 30; // Error: Cannot redeclare 'x' in the same scope.
 * * const:
 * - Block-scoped constant declaration.
 * - Cannot be redeclared or updated (reassigned).
 * - Must be initialized at the time of declaration.
 * - Example:
 *  const y = 10;
 * *  y = 20; // Error: Cannot assign to 'y' because it is a constant.
 *  *  const y = 30; // Error: Cannot redeclare 'y' in the same scope.
 * 
 * Best practices:
 * Avoid var - it can cause unexpected bugs due to function scope
 * Use let - WHen variable needs to change later
 * Use const - For values that should never change(constants)
 */