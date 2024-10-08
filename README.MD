# Phaser Editor v4 Timer Scripts (library)

**Warning: This project is deprecated. It is now part of the [@phaserjs/editor-scripts-quick](https://www.npmjs.com/package/@phaserjs/editor-scripts-quick) library.**

This project contains Phaser Editor scripts for using a timer.

These script nodes are very basic and may fit on any Phaser Editor project.

The scripts are coded in TypeScript with ES modules.

## Installing (NPM)

This package depends on the following packages:

- `@phaserjs/editor-scripts-core`
- `@phaserjs/editor-scripts-random`

To install this in your game you have to install dependencies too:

```
npm install @phaserjs/editor-scripts-core
npm install @phaserjs/editor-scripts-random
npm install @phaserjs/editor-scripts-timer
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phaserjs/editor-scripts-core",
        "@phaserjs/editor-scripts-random",
        "@phaserjs/editor-scripts-timer"
    ]
}
```

## Installing (vanilla JavaScript)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor files, JavaScript files, and TypeScript type definitions.
* Add a `script` tag to the `index.html` file to load the `lib/phaserjs_editor_scripts_timer.js` file.

## Summary

This library provides a few actions for implementing timers in your game. 

As a reminder, an action is executed by an event script or another action.

The actions:

* **Delay Action** - Delays, then executes the children's scripts.
* **Delay Random Action** - Delays a random time, then executes the children's
* **Emit Tick Action** - Emits a tick at every given delay.
* **Emit Random Tick Action** - Emits a tick always at a random delay.

## Delay Action

*Class: DelayActionScript*

This action delays a given **Delay** time and then executes the children's scripts.

This action allows the **Target Action Config** user component.

## Delay Random Action

*Class: DelayRandomActionScript*

This action delays a random time and then executes the children's scripts.

The delay is a random value generated by any of the random user component configurations in the [@phaserjs/editor-scripts-random](https://github.com/PhaserEditor2D/phasereditor2d-scripts-random) library.


This action allows the **Target Action Config** user component.

## Emit Tick Action Script

*Class: EmitTickActionScript*

This action emits a tick at a fixed rate, within the given **Delay**. At every tick, it executes the children's scripts.

This action allows the **Target Action Config** user component.

## Emit Random Tick Action

*Class: EmitRandomTickActionScript*

This action emits a tick at a random rate. At every tick, it executes the children's scripts.

The delay is a random value generated by any of the random user component configurations in the [@phaserjs/editor-scripts-random](https://github.com/PhaserEditor2D/phasereditor2d-scripts-random) library.

This action allows the **Target Action Config** user component.