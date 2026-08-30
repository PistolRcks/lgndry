/**
 * Defines an object which can be rolled, providing a random number.
 */
export interface Rollable {
    /**
     * "Rolls" the object, providing a random integer number.
     */
    roll(): number
}
