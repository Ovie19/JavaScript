var var1 = 10;
var var2 = 20;
var var3 = 30;

console.log("Var1 = " + var1);
console.log("Var2 = " + var2);
console.log("Var3 = " + var3);

var temp = var1;
var1 = var2;
var2 = var3;
var3 = temp;

console.log("\nVar1 = " + var1);
console.log("Var2 = " + var2);
console.log("Var3 = " + var3);