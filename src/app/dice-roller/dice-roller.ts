import { Component } from '@angular/core';
import { signal } from '@angular/core';

// for right now I think we're just gonna place this here. So it goes
// class representing a physical die
class Die {
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

    // rolls the die, updating the value
    // outputs the rolled value
    roll(): number {
        this.currentValue = Math.floor(Math.random() * this.sides) + 1;
        return this.currentValue;
    }
}

@Component({
  selector: 'dice-roller',
  imports: [],
  templateUrl: './dice-roller.html',
  styleUrl: './dice-roller.css',
})
export class DiceRoller {
    dice: Die[] = [
        new Die(20),
        new Die(20),
        new Die(20),
        new Die(20),
        new Die(20),
        new Die(20)
    ]

    diceOutput = signal("0");

    dieOrDice = signal(this.dice.length > 1 ? "Dice" : "Die")

    rollDice() {
        let first = true;
        let output = "";

        this.dice.forEach(die => {
            const result = die.roll();
            if (!first)
            {
                output += " + ";
            }
            output += `${result} (d${die.sides})`;
            first = false;
        });

        this.diceOutput.set(output);
    }
}
