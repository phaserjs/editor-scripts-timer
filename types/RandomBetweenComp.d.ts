export default class RandomBetweenComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomBetweenComp;
    private gameObject;
    min: number;
    max: number;
    getRandomBetween(): number;
}
