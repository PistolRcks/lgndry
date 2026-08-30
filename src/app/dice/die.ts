import { Rollable } from "./rollable";

/**
 * class representing a physical die
 * @note a die does NOT include modifiers
 * @see Modifier
 */
export class Die implements Rollable {
    // number of sides on this die
    sides: number;

    // current value of this die (what was rolled last)
    lastRoll: number = 1;

    constructor(sides: number) {
        if (sides <= 0) {
            throw new Error("number of sides must be greater than 0");
        }
        this.sides = sides;
    }

    // rolls the die, updating the lastRoll
    roll(): number {
        this.lastRoll = Math.floor(Math.random() * this.sides) + 1;
        return this.lastRoll;
    }

    toString(): string {
        return String(this.lastRoll);
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

    // returns whether or not the lastRoll lies within the crit range
    isCrit() {
        return this.lastRoll >= ((this.sides + 1) - this.critRange);
    }

    // returns whether or not the lastRoll lies within the fumble range
    isFumble() {
        return this.lastRoll <= this.fumbleRange;
    }

    override toString(): string {
        let critState = "";
        if (this.isCrit()) {
            critState = " (Crit)";
        }
        else if (this.isFumble()) {
            critState = " (Fumble)";
        }

        return String(this.lastRoll) + critState;
    }
}
