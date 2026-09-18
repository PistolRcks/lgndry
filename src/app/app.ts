import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoToolbar } from './character-sheet/info-toolbar/info-toolbar.js';
import { DiceRoller } from './dice-roller/dice-roller.js';
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, InfoToolbar, DiceRoller],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
    protected readonly title = signal('lgndry');

    ngOnInit(): void {
        initFlowbite();
    }
}
