// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class DelayActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    delay = 0;
    /* START-USER-CODE */
    execute(...args) {
        this.scene.time.addEvent({
            delay: this.delay,
            callback: () => {
                this.executeChildren(...args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class DelayRandomActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        const delay = GetRandom.getRandom(this);
        this.scene.time.addEvent({
            delay,
            callback: () => {
                this.executeChildren(...args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class EmitRandomTickActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    _target;
    execute(...args) {
        this._target = this.getActionTargetObject(args);
        this.nextTick(...args);
    }
    nextTick(...args) {
        const delay = GetRandom.getRandom(this);
        this.scene.time.addEvent({
            delay,
            callback: () => {
                if (this._target && !this._target.scene) {
                    // don't exec children
                    // if the game object is disabled
                    return;
                }
                this.executeChildren(...args);
                this.nextTick(...args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class EmitTickActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    delay = 1000;
    /* START-USER-CODE */
    execute(...args) {
        const target = this.getActionTargetObject(args);
        this.scene.time.addEvent({
            delay: this.delay,
            loop: true,
            callback: () => {
                if (target && !target.scene) {
                    // don't exec children
                    // if the game object is disabled
                    return;
                }
                this.executeChildren(...args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here


