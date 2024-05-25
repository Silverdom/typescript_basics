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
