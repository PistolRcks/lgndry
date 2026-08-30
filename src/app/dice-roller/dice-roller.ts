import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Die, TwentySidedDie } from '../dice/die';
import { DiceFactory } from '../dice/dice-factory';
import { Rollable } from '../dice/rollable';
import { Modifier } from '../dice/modifier';


@Component({
    selector: 'dice-roller',
    imports: [],
    templateUrl: './dice-roller.html',
    styleUrl: './dice-roller.css',
})
export class DiceRoller {
    dice: Rollable[] = [
        DiceFactory.createDie(20),
        DiceFactory.createDie(20),
        DiceFactory.createDie(20),
        DiceFactory.createDie(20),
        new Modifier(15),
    ]

    diceOutput = signal("No dice rolled (yet)");

    dieOrDice = signal(this.dice.length > 1 ? "Dice" : "Die")

    rollDice() {
        let first = true;
        let output = "";

        this.dice.forEach(rollable => {
            let result = String(rollable.roll());
            if (!first) {
                output += " + ";
            }

            if (rollable instanceof TwentySidedDie) {
                // TODO: can't change text color. we'll adjust that when we get a die component
                if (rollable.isCrit()) {
                    result += ", Crit";
                } else if (rollable.isFumble()) {
                    result += ", Fumble";
                }
            }
            output += result;

            if (rollable instanceof Die) {
                output += ` (d${rollable.sides})`;
            }
            first = false;
        });

        this.diceOutput.set(output);
    }
}
