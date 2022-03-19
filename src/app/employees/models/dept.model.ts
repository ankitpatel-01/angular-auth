export interface Emp {
    id: number;
    name: string,
    age: number,
    gender: string,
    hobbies: string[],
}

export interface Dept {
    id: number;
    name: string,
    emps: Emp[],
}

