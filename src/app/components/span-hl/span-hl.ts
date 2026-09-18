import { Component, Input, computed } from '@angular/core';

/**
 * <span>, but provides a unified "rounded corner" rectangle for background highlighting
 */
@Component({
    imports: [],
    selector: 'span-hl',
    styleUrl: './span-hl.css',
    templateUrl: './span-hl.html',
})
export class SpanHl {
    // background color of the span (implies `bg-${bgColor}` class)
    @Input() bgColor: string = "transparent"
    // text color of the span (implies `text-${bgColor}` class)
    @Input() textColor: string = "black"

    colorClasses = computed(() => [`bg-${this.bgColor}`, `text-${this.textColor}`])
}
