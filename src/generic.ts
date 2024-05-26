function getSecondElement<T>(array: T[]): T {
    return array[1];
}

const ar = [1, 2, 3];
const br = ["sdf", "asd"];

getSecondElement<number>(ar);
getSecondElement(br); //Infered generic

const myset = new Set<string>();
const mymap = new Map<string, number>();

type APIResponse<T extends Object = { status: number; }> = {
    data: T,
    error: boolean;
};

type UserRespone = APIResponse<{ name: string, age: number; }>;
type BlogRespone = APIResponse<{ title: string; }>;

let user: UserRespone = {
    data: { name: "Santiago", age: 30 },
    error: false
};

let blog: BlogRespone = {
    data: { title: "My first blog" },
    error: true
};

const nothing: APIResponse = {
    data: { status: 401 },
    error: true
};

//default value
// generic extends
// Geneic nesting

type MyNewTuple<T> = [string, T];
type MyType<T> = Array<MyNewTuple<T>>;
type MyObj<T> = {
    [index: MyType<T>[number][0]]: MyType<T>[number][1];
};

function aToO<T>(arrDes: MyType<T>): MyObj<T> {
    let obj: MyObj<T> = {};
    arrDes.map((item) => {
        obj[item[0]] = item[1];
    });
    return obj;
}

const arrDes: MyType<number | boolean> = [
    ["keyOne", 1],
    ["keyTwo", 2],
    ["keyThree", true],
];

console.log(aToO<number | boolean>(arrDes));

document.querySelector<HTMLInputElement>(".abc");

function wait(duration: number): Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve("Hi"), duration);
    });
}

wait(1000).then(value => {
    console.log(value.length);
});