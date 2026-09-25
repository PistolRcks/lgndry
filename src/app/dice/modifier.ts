import { Rollable } from "./rollable";

// how proficiency bonus gets multiplied based on skill proficiency
export enum ProficiencyMultiplier {
    INEPT = 0,
    NOVICE = 0.5,
    PROFICIENT = 1,
    EXPERT = 2,
}

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

    /**
     * @returns the value of the modifier (as a string)
     */
    toString(): string {
        return String(this.value);
    }
}
