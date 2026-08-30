import { Rollable } from "./rollable";

// in the future we'll have these rules coming from elsewhere, but we don't really mind putting it here for now
const NUMBER_OF_ADVANTAGE_ROLLS: number = 2;
const NUMBER_OF_DISADVANTAGE_ROLLS: number = 2;

const MOD_FROM_MULTIPLE_ADVANTAGES: number = 2;
const MOD_FROM_MULTIPLE_DISADVANTAGES: number = -2;

/**
 * class representing a physical die
 * @note a die does NOT include modifiers
 * @see Modifier
 */
export class Die implements Rollable {
    // number of sides on this die
    sides: number;

    // current value of this die
    currentValue: number = 1;

    constructor(sides: number) {
        if (sides <= 0) {
            throw new Error("number of sides must be greater than 0");
        }
        this.sides = sides;
    }

    // rolls the die, updating the currentValue
    roll(): number {
        this.currentValue = Math.floor(Math.random() * this.sides) + 1;
        return this.currentValue;
    }
}


// class representing a twenty sided Die, which is used for skillchecks
// the `sides` property is always 20
export class TwentySidedDie extends Die {
    // crit range of the die
    // when rolling, if the result is equal to or greater than 21 - the crit range, it is a crit
    // ergo, a critRange of 1 means crits on 20 and nothing else
    critRange: number = 1

    // fumble range of the die
    // when rolling, if the result is equal to or less than the fumble range, it is a fumble
    // ergo, a fumbleRange of 1 means fumbles on 1 and nothing else
    fumbleRange: number = 1

    // total modifier from the last call of roll()
    modFromAdvantages: number = 0

    constructor() {
        super(20);
    }

    // returns whether or not the currentValue lies within the crit range
    isCrit() {
        return this.currentValue >= ((this.sides + 1) - this.critRange);
    }

    // returns whether or not the currentValue lies within the fumble range
    isFumble() {
        return this.currentValue <= this.fumbleRange;
    }

    // rolls die (with advantages/disadvantages)
    // advantages and disadvantages cancel each other out
    // if there are any remaining advantages, two d20s are roll()'d, then the max of the two is set as currentValue
    //      remaining advantages past the first each add 2 to `modFromAdvantages`
    // if there are any remaining disadvantages, two d20s are roll()'d, then the min of the two is set as currentValue
    //      remaining disadvantages past the first each subract 2 to `modFromAdvantages`
    // returns which dice were rolled, and which was chosen
    // TODO: pull grouping functionality out of individual dice

    // override roll(advantages: number = 0, disadvantages: number = 0): string {
    //     const totalAdv = advantages - disadvantages;
    //     let values: number[] = [];
    //
    //     this.modFromAdvantages = 0;
    //
    //     if (totalAdv == 0) {
    //         return super.roll();
    //     }
    //
    //     // roll a number of times
    //     for (let i = 0; i < (totalAdv > 0 ? NUMBER_OF_ADVANTAGE_ROLLS : NUMBER_OF_DISADVANTAGE_ROLLS); i++) {
    //         super.roll();
    //         values.push(this.currentValue);
    //     }
    //
    //     // choose max or min based on advantage or disadvantage respectively
    //     this.currentValue = totalAdv > 0 ? Math.max(...values) : Math.min(...values);
    //
    //     // add more modifiers if we have them
    //     this.modFromAdvantages += (totalAdv > 0) ? totalAdv * MOD_FROM_MULTIPLE_ADVANTAGES : -totalAdv * MOD_FROM_MULTIPLE_DISADVANTAGES;
    //
    //     return values.join(", ");
    // }
}
