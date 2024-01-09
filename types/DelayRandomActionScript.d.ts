import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class DelayRandomActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}
