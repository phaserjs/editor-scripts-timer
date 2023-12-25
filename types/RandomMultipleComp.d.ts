export default class RandomMultipleComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomMultipleComp;
    private gameObject;
    multiple: number;
    min: number;
    max: number;
    private getRandomMultipleInRange;
    getRandomMultiple(): number;
}
