import { Component, Input, computed } from '@angular/core';
import { ProficiencyMultiplier } from '../../../dice/modifier';
import { PSub } from '../../../components/p-sub/p-sub';

// TODO: can also be used for Skill
@Component({
    imports: [PSub],
    selector: 'ability',
    styleUrl: './ability.css',
    templateUrl: './ability.html',
})
export class Ability {
    // Full name of the ability
    @Input() name: string = "Ability"

    // Base modifier (score) of the ability
    @Input() score: number = 0

    // What kind of proficiency the character has for saves of this ability
    @Input() proficiency: ProficiencyMultiplier = ProficiencyMultiplier.INEPT

    // TODO: I wonder if we can get this info from a centralized source?
    // Proficiency bonus of the character
    @Input() proficiencyBonus: number = 2

    // Short name (like "CON" or "CHA" of the ability)
    shortName = computed(() => this.name.substring(0, 3).toUpperCase())

    // TODO: this should probably come from a list of additive input effects on the skill
    // Final modifier (after basic additive effects) of the ability
    modifier = computed(() => this.score + (this.proficiencyBonus * this.proficiency))

}
