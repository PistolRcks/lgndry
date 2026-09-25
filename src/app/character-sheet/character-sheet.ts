import { Component } from '@angular/core';
import { InfoToolbar } from './info-toolbar/info-toolbar';
import { AbilitiesContainer } from './abilities-container/abilities-container';

@Component({
    selector: 'character-sheet',
    imports: [InfoToolbar, AbilitiesContainer],
    templateUrl: './character-sheet.html',
    styleUrl: './character-sheet.css',
})
export class CharacterSheet {

}
