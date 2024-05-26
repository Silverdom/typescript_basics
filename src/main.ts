console.log("hi");

// These two are equivalent, now a is set to literal 5 and cannot be assigned any other values.
let a = 5 as const;
const b = 5;

// This makes the arr readonly, helpful with statuses.
let arr = ["1", "2", "3"] as const;
// statusA is set to "1"
let statusA = arr[0];
const SKILL_LEVEL = ["Beginner", "Intermediate", "Expert"] as const;

type Person = {
    id: string | number;
    name: string;
    skillLevel: (typeof SKILL_LEVEL)[number];
};

type PersonSkill = {
    skillLevel: "Beginner" | "Intermediate" | "Expert";
};

// tuples

type MyTuple = [string, number];

const amd: MyTuple = ["abc", 1];