export default class RandomInArrayComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomInArrayComp;
    private gameObject;
    options: number[];
    getRandomInArray(): number;
}
