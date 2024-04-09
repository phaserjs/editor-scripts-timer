import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
export default class DelayActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    delay: number;
    execute(...args: any[]): void;
}
