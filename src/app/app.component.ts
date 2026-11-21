import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        NavbarComponent,
        HeroComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.css']
})
export class AppComponent {
    title = 'angular-portfolio';
}
