# Type modifiers

## Union Type

union type is represented using pipe operator _|_
This is used when we want a variable or object property have any of muliple types.
This does not work with interfaces

```JSX
const id: string | number = 9;
```

more examples in modifiers.ts

## Intersection Types

Intersection type is represented using the and operator _&_
This is used when we want a object to have all the types of multiple types
This does not makes sense to use with primitive data as a single variable cannot have both types
This work with interfaces, example in modifers.ts

```JSX
type Person = {
    name: string,
    age: number;
};

type Todos = {
    id: number | string,
    todo: string;
};
type TodoAndPerson = Person & Todos;
```

## readonly

TS will warn if any readonly property is updated

```JSX
type PersonDet = {
    readonly id: number,
    name: string;
};

let personA: PersonDet = { id: 1, name: "Stacy" };
personA.id = 5;
```

## keyof

adds the types of the keys

```JSX
function getValue(key: keyof PersonDet, person: PersonDet) {
    return person[key];
}
```

## typeof

defines typeof the variable, works differently than javascript's typeof function

```JSX
const abc: typeof getValue = getValue;
```

## Index types

We can traverse type with index to get the type of that property of the object.

```JSX
type TodoList = {
    id: string | number,
    date: string,
    todo: {
        id: string | number;
        note: string;
    };
};

let todo: TodoList["todo"] = {
    id: 1,
    note: "Do this"
};
```

We can even define what keys will be allowed in an object based on another property type, more examples on modifiers.js
