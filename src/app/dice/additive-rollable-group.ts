import { RollableGroup } from "./rollable-group";

/**
 * Defines a RollableGroup where values are coalesced by adding all the values together.
 *
 * "Advantage" describes rolling all dice in the group and taking the highest value.
 * "Disadvantage" describes rolling all dice in the group and taking the lowest value.
 */
export class AdditiveRollableGroup extends RollableGroup {
    lastRoll: number = -1

    /**
     * Rolls all Rollables within this group, then adds them all together.
     */
    override roll(): number {
        let sum = 0;

        // roll all dice and collate values
        this.rollables.forEach(
            (rollable) => {
                sum += rollable.roll()
            }
        )

        this.lastRoll = sum;

        return this.lastRoll;
    }

    /**
     * @returns string in the format of "{values} (= {lastRoll})"
     *   {values} is plus-delineated
     */
    override toString(): string {
        const values: string[] = []

        // get all strings
        this.rollables.forEach(
            (rollable) => {
                values.push(rollable.toString())
            }
        )

        // place total at the end
        return `${values.join(" + ")} (= ${this.lastRoll})`;
    }
}
