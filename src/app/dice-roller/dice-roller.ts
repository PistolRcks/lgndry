import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Die, TwentySidedDie } from '../dice/die';
import { DiceFactory } from '../dice/dice-factory';
import { Rollable } from '../dice/rollable';
import { Modifier } from '../dice/modifier';
import { AdditiveRollableGroup } from '../dice/additive-rollable-group';
import { DiceRollableGroup } from '../dice/dice-rollable-group';
import { VantageKind, VantageRollableGroup } from '../dice/vantage-rollable-group';


@Component({
    selector: 'dice-roller',
    imports: [],
    templateUrl: './dice-roller.html',
    styleUrl: './dice-roller.css',
})
export class DiceRoller {
    // aka: 2d6 + 2d20k1 + 15
    equation: AdditiveRollableGroup = new AdditiveRollableGroup(
        [
            new DiceRollableGroup(2, 6),
            new VantageRollableGroup([
                new TwentySidedDie(),
                new TwentySidedDie()
            ], VantageKind.ADVANTAGE),
            new Modifier(15)
        ]
    )

    diceOutput = signal("No dice rolled (yet)");

    dieOrDice = signal(this.equation.rollables.length > 1 ? "Dice" : "Die")

    rollDice() {
        this.equation.roll();

        this.diceOutput.set(this.equation.toString());
    }
}
