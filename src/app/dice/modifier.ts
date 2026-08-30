import { Rollable } from "./rollable";

// determines a die which only modifies a roll (i.e. one whose value is always the same)
export class Modifier implements Rollable {
    /**
     * the value of the modifier
     */
    value: number

    /**
     * @constructor
     * @param value - the value of the modifier
     */
    constructor(value: number) {
        this.value = value;
    }

    /**
     * @returns the value of the modifier
     */
    roll(): number {
        return this.value;
    }
}
