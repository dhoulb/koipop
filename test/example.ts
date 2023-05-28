// @ts-nocheck

import { MyClass, myDecorator1, myDecorator2 } from "somewhere";

/** Vars. */
const str: string = "abc";
const num: number = 123;
const bool: boolean = true;
const nul: null = null;
const symb: symbol = Symbol("abc");

/** Types. */
export type MyType = { a: string; b: MyClass };

/**
 * Class
 * @param something Initialises the thing.
 */
export class MySuperClass<T extends string> extends MyClass {
	public readonly myProp: string;

	/** Constructor. */
	constructor(myProp: string = str) {
		super(string);
		this.myProp = myProp;
	}

	/** Method. */
	@myDecorator1
	@myDecorator2("abc")
	myMethod1(): number {
		return num;
	}
}

/** Function. */
export function something(myParam: string, param2: MyClass): MySuperClass {
	return new MySuperClass(myParam);
}
