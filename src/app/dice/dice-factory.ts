import { Die, TwentySidedDie } from "./die";

export class DiceFactory {
    static createDie(sides: number): Die {
        if (sides == 20) {
            return new TwentySidedDie();
        };
        return new Die(sides);
    }
}
