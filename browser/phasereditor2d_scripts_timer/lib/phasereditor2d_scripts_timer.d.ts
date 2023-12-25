declare class DelayActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    delay: number;
    execute(...args: any[]): void;
}

declare class DelayRandomActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    min: number;
    max: number;
    execute(...args: any[]): void;
}

declare class EmitRandomTickActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    private _target?;
    execute(...args: any[]): void;
    nextTick(...args: any[]): void;
}

declare class EmitTickActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    delay: number;
    execute(...args: any[]): void;
}

declare class GetRandom {
    static getRandom(node: ScriptNode): number;
}

declare class RandomBetweenComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomBetweenComp;
    private gameObject;
    min: number;
    max: number;
    getRandomBetween(): number;
}

declare class RandomInArrayComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomInArrayComp;
    private gameObject;
    options: number[];
    getRandomInArray(): number;
}

declare class RandomMultipleComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomMultipleComp;
    private gameObject;
    multiple: number;
    min: number;
    max: number;
    private getRandomMultipleInRange;
    getRandomMultiple(): number;
}


