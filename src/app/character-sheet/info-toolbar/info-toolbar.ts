import { Component } from '@angular/core';
import { PSub } from '../../components/p-sub/p-sub';
import { SpanHl } from '../../components/span-hl/span-hl';

@Component({
    imports: [PSub, SpanHl],
    selector: 'info-toolbar',
    styleUrl: './info-toolbar.css',
    templateUrl: './info-toolbar.html',
})
export class InfoToolbar {
}
