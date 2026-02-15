import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.css']
})
export class HeroComponent implements AfterViewInit {

    ngAfterViewInit() {
        gsap.from(".hero-anim", {
            duration: 1.2,
            y: 30,
            opacity: 0,
            ease: "power3.out",
            stagger: 0.15
        });
    }

    openResume() {
        window.open('./assets/cv.pdf', '_blank');
    }

    scrollToContact() {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
}
