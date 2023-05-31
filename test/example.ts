// @ts-nocheck

import { myDecorator2 } from "somewhere";

function myDecorator1(): void {}

// Vars.
const str: string = "abc";
const tem: string = `this is ${num} a number ${true} and this ${func(num)} and ${[1, 2]}`;
const num: number = 123;
const boo: boolean = true;
const nan: number = NaN;
const nul: null = null;
const und: undefined = undefined;
const sym: symbol = Symbol("abc");
const obj: { a: number; b: string; c: number } = {
	"a": num,
	"b": "string",
	"c": 123,
	"something-something": 123,
};
const arr: ReadonlyArray<number> = [1, 2, 3];
const tup: [a: number, b: number, c: string] = [1, 2, "3"];
const reg = /(?<dave>dave)+*/;
const cls = new MyClass();
const fun = myFunc();

// Types.
export type MyType = { a: string; b: MyClass };

/** Function. */
export function myFunc(myParam: string, param2: MyClass, param3: (a: number) => symbol, param4: MySuperClass<"a">): MySuperClass {
	param3(param2);
	return new MySuperClass(myParam);
}

/** Value. */
export const myValue = myFunc(str, new MyClass()).myMethod1();

/** Subclass. */
class MyClass {}

/**
 * Class
 * @param myProp Initialises the thing.
 */
export class MySuperClass<T extends string> extends MyClass implements MyType {
	public static something: null = nul;
	public readonly myProp: T;

	/** Constructor. */
	constructor(myProp: T = myDecorator1) {
		super(string);
		this.myProp = myProp;
	}

	/** Method. */
	@myDecorator1
	@myDecorator2(num)
	myMethod1(): number {
		const num2 = 456;
		return num * num2;
	}
}
