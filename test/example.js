// @ts-nocheck

import { MyClass, myDecorator1, myDecorator2 } from "somewhere";

// Vars.
const str = "abc";
const num = 123;
const bool = true;
const nul = null;
const symb = Symbol("abc");

/** Function. */
export function myFunc(myParam, param2) {
	return new MySuperClass(myParam);
}

export const myValue = myFunc(str, new MyClass());

/**
 * Class
 * @param why Initialises the thing.
 */
export class MySuperClass extends MyClass {
	/** Constructor. */
	constructor(myProp = str) {
		super(string);
		this.myProp = myProp;
	}

	/** Method. */
	@myDecorator1
	@myDecorator2(num)
	myMethod1() {
		const num2 = 456;
		return num * num2;
	}
}
