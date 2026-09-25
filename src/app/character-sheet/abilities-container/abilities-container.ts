import { Component } from '@angular/core';
import { Ability } from './ability/ability';
import { ProficiencyMultiplier } from '../../dice/modifier';

@Component({
    imports: [Ability],
    selector: 'abilities-container',
    styleUrl: './abilities-container.css',
    templateUrl: './abilities-container.html',
})
export class AbilitiesContainer {
    ProficiencyMultiplier = ProficiencyMultiplier
}
