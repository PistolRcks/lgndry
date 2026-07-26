import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiceRoller } from "./dice-roller/dice-roller.js";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DiceRoller],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lgndry');
}
