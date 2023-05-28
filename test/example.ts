// @ts-nocheck

import { MyClass, myDecorator1, myDecorator2 } from "somewhere";

/** Vars. */
const str: string = "abc";
const num: number = 123;
const bool: boolean = true;
const nul: null = null;
const symb: symbol = Symbol("abc");

/**
 * Class
 * @param something Initialises the thing.
 */
export class MySuperClass extends MyClass {
	public readonly something: string;

	/** Constructor. */
	constructor(something: string = str) {
		super(string);
		this.something = something;
	}

	/** Method. */
	@myDecorator1
	@myDecorator2("abc")
	myMethod1(): number {
		return num;
	}
}
