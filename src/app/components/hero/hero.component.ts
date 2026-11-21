import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.css']
})
export class HeroComponent {
    openResume() {
        window.open('./assets/cv.pdf', '_blank', 'noopener');
    }
}
