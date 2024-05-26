# Advanced Types

## Const and Enum types

we can use _as const_ keyword to convert a variable type to value literal.
This also works with objects which makes the object or each element readonly.

```JSX
let a = 5 as const;
const b = 5;
let arr = ["1", "2", "3"] as const;
```

This makes the variable only hold those specific values and not anything else.
This is quite benificial when defining sob specific value, as we cannot loop through a type to get the allowed value it helps us to set Enum.

```JSX
type Person = {
    id: string | number;
    name: string;
    skillLevel: "Beginner" | "Intermediate" | "Expert"
};
```

Using the following we will not be able to loop through Person type to get all the skillLevel allowed values as it is not an object. We can change the implementation as such to have access to the default values both in javascript and typescript.

```JSX
const SKILL_LEVEL = ["Beginner", "Intermediate", "Expert"] as const;

type Person = {
    id: string | number;
    name: string;
    skillLevel: (typeof SKILL_LEVEL)[number];
};
```

## tuples

Hardcoded types for arrays. These are used when we exactly know what type of values we will have in an array and in which order. Useful in React hooks like useState

```JSX
type MyTuple = [string, number];
const amd: MyTuple = ["abc", 1];
```

## Generics

Follow examples at generic.ts
