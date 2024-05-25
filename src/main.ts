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

function printPerson(person: { name: string; }) {
  console.log(person.name);
}
// Gives error at age as we are explicitly passing the object
printPerson({ name: "Jeff", age: 10 });
// no error.
const person3 = { name: "Jeff", age: 10 };
printPerson(person3);
