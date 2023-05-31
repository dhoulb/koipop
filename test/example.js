// @ts-nocheck

import { MyClass, myDecorator1, myDecorator2 } from "somewhere";

// Vars.
const str = "abc";
const num = 123;

/**
 * Function.
 * @type {(myParam: string) => MySuperClass} The first param.
 */
export function myFunc(myParam, param2) {
	// This is a comment.
	return new MySuperClass(myParam);
}

/**
 * Value
 * @type {MySuperClass} The value of the thing.
 */
export const myValue = myFunc(str, new MyClass());

/**
 * Class
 * @param {string} myProp Initialises the thing.
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
