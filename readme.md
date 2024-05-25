# Different types in Typescript

## Primitive Types

_number_, _string_, _boolean_ are primitive types in typescript
To make arrays of these types we use _number[]_, _string[]_, _boolean[]_

**_Any_ type is default if no type is mentioned for undefined variable.
For defined variable the type is infered from the assigned value**

```JSX
let a = 5
```

Here the type of a is infered as number from value.

```JSX
let a;
```

Here the type is any as not value is present.

## Object Types

objects are typed as such. we can use ? to type a attribute as optional and it will be typed as undefined or the primitive type.

```JSX
let person: { name: string; age: number; isProgrammer?: boolean; } = {
  name: "John",
  age: 28,
};
```

## Define a type and re use at multiple objects

```JSX
type PersonDetails = {
  name: string,
  age: number,
  isProgrammer?: boolean;
};

type PersonName = number
```

alternate way of defining a type is using an interface. Interface only works on objects
Union cannot be used with 2 interfaces.

```JSX
interface PersonDetails2 {
  name: string,
  age: number,
  isProgrammer?: boolean;
  address: {
    street: string;
  };
};

// -- not possible --
// interface PersonName = number
```

## Function types

We can add type to the argument same way we do it for a variable and to add type to the return value of the function we add it after the argument ending bracker.

```JSX
function sum(a: number, b: number): number | null {
  if (typeof a == "number" || typeof b == "number") {
    return a + b;
  } else {
    return null;
  }
}
```

if we explicitly pass an object into a function it will only allow the values mentioned in the argument type, however if we pass a variable it will not do so

```JSX
function printPerson(person: { name: string; }) {
  console.log(person.name);
}
// Gives error at age as we are explicitly passing the object
printPerson({ name: "Jeff", age: 10 });
// no error.
const person3 = { name: "Jeff", age: 10 };
printPerson(person3);
```

## void type

_void_ is used if a function doesnot return anything.
Void means it is nothing and cannot be used in expressions ,however null or undefined can be used

## Optional Parameters

```JSX
function printPerson(person: { name: string; age?: number; }): void {
  console.log(person.name);
}
```

## destructuring and rest operator type

**rest operator**

```JSX
function sum2(...nums: number[]) {
  // sum all nums
}
```

**destructing**

```JSX
type Options = {
  debugMode?: boolean,
  logLevel?: number;
};

function printLog1(message: string, { debugMode = false, logLevel }: Options = {}) {
  console.log(message, debugMode);
}
```

## variable as function

```JSX
function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}
```
