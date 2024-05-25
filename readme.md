# Different types in Typescript

_number_, _string_, _boolean_ are primitive types in typescript
To make arrays of these types we use _number[]_, _string[]_, _boolean[]_
_Any_ type is default if no type is mentioned for undefined variable.
For defined variable the type is infered from the assigned value

```JSX
let a = 5
```

Here the type of a is infered as number from value.

```JSX
let a;
```

Here the type is any as not value is present.
