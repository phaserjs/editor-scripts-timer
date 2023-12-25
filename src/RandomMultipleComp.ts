
// You can write more code here

import { ScriptNode } from "@phasereditor2d/scripts-core";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RandomMultipleComp {

	constructor(gameObject: any) {
		this.gameObject = gameObject;
		(gameObject as any)["__RandomMultipleComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: any): RandomMultipleComp {
		return (gameObject as any)["__RandomMultipleComp"];
	}

	private gameObject: any;
	public multiple: number = 10;
	public min: number = 0;
	public max: number = 1000;

	/* START-USER-CODE */

	private getRandomMultipleInRange(min: number, max: number, multiple: number) {
		// Calculate the range of numbers between min and max
		const range = max - min + 1;

		// Generate a random number within the range
		const randomOffset = Math.floor(Math.random() * range);

		// Find the closest multiple within the chosen range
		const randomMultiple = min + randomOffset - ((min + randomOffset) % multiple);

		return randomMultiple;
	}

	getRandomMultiple() {

		return this.getRandomMultipleInRange(this.min, this.max, this.multiple);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
