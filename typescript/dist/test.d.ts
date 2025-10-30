export type Test = string;
export declare class Person<T> {
    private name;
    constructor(name: T);
    display(): void;
}
interface PlayerI {
    name: string;
    age: number;
}
type PlayerType = {
    name: string;
    age: number;
};
type ProfessionType = PlayerType & {
    sex: String;
};
export type intersectionType = PlayerI & ProfessionType;
export {};
//# sourceMappingURL=test.d.ts.map