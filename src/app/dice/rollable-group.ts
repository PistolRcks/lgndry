import { Rollable } from "./rollable";

/**
 * defines a group of Rollable objects (which itself is a Rollable).
 *
 * the `roll` function should perform some function to coalesce all `rollables`.
 */
export abstract class RollableGroup implements Rollable {
    rollables: Rollable[]

    constructor(rollables: Rollable[]) {
        this.rollables = rollables;
    }

    /**
     * Rolls all Rollables in `rollables`, then coalesces their values into one number.
     */
    abstract roll(): number;

    /**
     * Returns a string defining how the value was coalesced.
     */
    abstract toString(): string;
}
