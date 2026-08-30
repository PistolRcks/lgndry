import { Rollable } from "./rollable";
import { RollableGroup } from "./rollable-group";

export enum VantageKind {
    DISADVANTAGE = -1,
    ADVANTAGE = 1
}

/**
 * Defines a RollableGroup where values are coalesced via "Advantage" or "Disadvantage".
 *
 * "Advantage" describes rolling all dice in the group and taking the highest value.
 * "Disadvantage" describes rolling all dice in the group and taking the lowest value.
 */
export class VantageRollableGroup extends RollableGroup {
    kind: VantageKind
    lastRoll: number = -1

    constructor(rollables: Rollable[], kind: VantageKind) {
        super(rollables);
        this.kind = kind;
    }

    /**
     * Rolls all Rollables within this group, then coalesces based on the current `kind`.
     *
     * The max of all rolls is used if `kind === VantageKind.ADVANTAGE`.
     * The min of all rolls is used if `kind === VantageKind.DISADVANTAGE`.
     */
    override roll(): number {
        const values: number[] = []

        // roll all dice and collate values
        this.rollables.forEach(
            (rollable) => {
                values.push(rollable.roll())
            }
        )

        // choose max or min based on advantage or disadvantage respectively
        this.lastRoll = this.kind === VantageKind.ADVANTAGE ? Math.max(...values) : Math.min(...values);

        return this.lastRoll;
    }

    /**
     * @returns string in the format of "{kind}: {values} ({lastRoll})"
     *   {values} is comma-delineated
     */
    override toString(): string {
        const values: string[] = []

        // get all strings
        this.rollables.forEach(
            (rollable) => {
                values.push(rollable.toString())
            }
        )

        // prepend kind
        const kindStr = this.kind === VantageKind.ADVANTAGE ? "Advantage" : "Disadvantage"

        // place value at the end
        return `${kindStr}: ${values.join(", ")} (${this.lastRoll})`;
    }
}
