import { ScriptNode } from "@phasereditor2d/scripts-core";
import RandomMultipleComp from "./RandomMultipleComp";
import RandomInArrayComp from "./RandomInArrayComp";
import RandomBetweenComp from "./RandomBetweenComp";

export default class GetRandom {

    static getRandom(node: ScriptNode) {

        let result = 0;

		{
			const comp = RandomMultipleComp.getComponent(node);

			if (comp) {

				result = comp.getRandomMultiple();
			}
		}

		{
			const comp = RandomInArrayComp.getComponent(node);

			if (comp) {

				result = comp.getRandomInArray();
			}
		}

		{
			const comp = RandomBetweenComp.getComponent(node);

			if (comp) {

				result = comp.getRandomBetween();
			}
		}

        return result;
    }
}