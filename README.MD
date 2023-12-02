# Phaser Editor 2D Timer Scripts (library)

This project contains Phaser Editor 2D scripts for using a timer.

These script nodes are very basic and may fit on any Phaser Editor 2D project.

The scripts are coded in TypeScript with ES modules.

## Installing

This package depends on the following packages:

- `@phasereditor2d/scripts-core`

To install this in your game you have to install dependencies too:

```
npm install @phasereditor2d/scripts-core
npm install @phasereditor2d/scripts-timer
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phasereditor2d/scripts-core",
        "@phasereditor2d/scripts-timer"
    ]
}
```

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

## Delay Random Action

*Class: DelayRandomActionScript*

This action delays a random time and then executes the children's scripts.

The delay time is a random number between the given **Min** and **Max** parameters.

## Emit Tick Action Script

*Class: EmitTickActionScript*

This action emits a tick at a fixed rate, within the given **Delay**. At every tick, it executes the children's scripts.

## Emit Random Tick Action

*Class: EmitRandomTickActionScript*

This action emits a tick at a random rate. At every tick, it executes the children's scripts.

The delay time is a random number between the given **Min** and **Max** parameters.