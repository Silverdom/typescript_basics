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
