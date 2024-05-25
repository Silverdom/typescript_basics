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

// Object types

let person: { name: string; age: number; isProgrammer?: boolean; } = {
  name: "John",
  age: 28,
};

// type and interface

type PersonDetails = {
  name: string,
  age: number,
  isProgrammer?: boolean;
  address: {
    street: string;
  };
};

interface PersonDetails2 {
  name: string,
  age: number,
  isProgrammer?: boolean;
  address: {
    street: string;
  };
};

let person2: PersonDetails;


// Function type

function printName(name: string, age: number) {
  console.log(name);
}

function sum(a: number, b: number): number | null {
  if (typeof a == "number" || typeof b == "number") {
    return a + b;
  } else {
    return null;
  }
}

function printPerson(person: { name: string; age?: number; }): void {
  console.log(person.name);
}
// Gives error at age as we are explicitly passing the object
printPerson({ name: "Jeff", age: 10 });
// no error.
const person3 = { name: "Jeff", age: 10 };
printPerson(person3);


// Destructing and default value

type Options = {
  debugMode?: boolean,
  logLevel?: number;
};

function printLog(message: string, options: Options) {
  console.log(message);
}
function printLog1(message: string, { debugMode = false, logLevel }: Options = {}) {
  console.log(message, debugMode);
}
function printLog2(message: string, { debugMode = false } = {}) {
  console.log(message);
}
printLog2("anc");

// Rest operator type

function sum2(...nums: number[]) {
  // sum all nums
}


// Variables as function

function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}
// Question  why return type is not working
sumWithCallback(1, 2, (sum) => sum);
