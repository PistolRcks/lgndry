import { AdditiveRollableGroup } from "./additive-rollable-group";
import { Die } from "./die";

/**
 * Defines an AdditiveRollableGroup which defines a number of dice of a certain kind (like in the "XdY" format).
 */
export class DiceRollableGroup extends AdditiveRollableGroup {
    numberOfDice: number
    sides: number

    /**
     * @param numberOfDice - The number of Dice to include in this RollableGroup
     * @param sides - The number of sides each individual Die has (as in `Die.sides`)
     * @see Die
     */
    constructor(numberOfDice: number, sides: number) {
        const dice: Die[] = []
        for (let i = 0; i < numberOfDice; i++) {
            dice.push(new Die(sides));
        }

        super(dice);

        this.numberOfDice = numberOfDice;
        this.sides = sides;
    }

    /**
     * @returns a string in the "XdY" format with the lastRoll in parentheses afterwards
     */
    override toString(): string {
        return `${this.numberOfDice}d${this.sides} (${this.lastRoll})`
    }
}
