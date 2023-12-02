
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EmitRandomTickActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public min: number = 0;
	public max: number = 1000;

	/* START-USER-CODE */

	execute(...args: any[]): void {

		this.nextTick(...args);
	}

	nextTick(...args: any[]) {

		this.scene.time.addEvent({

			delay: Phaser.Math.Between(this.min, this.max),
			callback: () => {

				this.executeChildren(...args);

				this.nextTick(...args);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
