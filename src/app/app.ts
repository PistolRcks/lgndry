import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CharacterSheet } from './character-sheet/character-sheet.js';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CharacterSheet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
    protected readonly title = signal('lgndry');

    ngOnInit(): void {
        initFlowbite();
    }
}
