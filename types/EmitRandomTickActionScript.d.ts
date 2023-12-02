import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
export default class EmitRandomTickActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    min: number;
    max: number;
    execute(...args: any[]): void;
    nextTick(...args: any[]): void;
}
