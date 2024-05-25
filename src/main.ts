let a: number = 4;
let b: string;
b = "abc";
// let b: Number = new Number(5);

// Type inference
let c = 5;

// Literal type from inference - d is not a number here.
const d = 10;

// undefined and null means does not exist, hence type is any.
let m = null;
m = undefined;

console.log(a);

// Type array
let n: number[];
n = [1, 2, 3];

// Literal type does not work on objects as they are passed by ref
const o = [1, 2, 3];
