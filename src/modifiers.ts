
// Union operator - |
const id: string | number = 9;

type Status = "complete" | "pending" | "draft";

const stat: Status = "pending";

type Person = {
    name: string,
    age: number;
};

type Todos = {
    id: number | string,
    todo: string;
};

type TodoOrPerson = Person | Todos;

// Intersection operator - &
// does makes sense to use with primitive type like number & string,
// when used with object must make sure it does not overlap property

type TodoAndPerson = Person & Todos;

interface TodoAndPersonInterface extends Person, Todos {

}

let todoAndPerson: TodoAndPerson = {
    name: "Jake",
    age: 28,
    id: 8,
    todo: "Do something"
};
let todoAndPerson2: TodoAndPersonInterface = {
    name: "Jake",
    age: 28,
    id: 8,
    todo: "Do something"
};

// readonly

type PersonDet = {
    readonly id: number,
    name: string;
    age?: number;
};

let personA: PersonDet = { id: 1, name: "Stacy" };
personA.id = 5;
console.log(personA);


// keyof

function getValue(key: keyof PersonDet, person: PersonDet) {
    return person[key];
}

const abc: typeof getValue = getValue;