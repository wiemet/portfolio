import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, HeroComponent, SkillsComponent, ProjectsComponent, AboutComponent, ContactComponent],
  templateUrl: './app.html',
})
export class App {}
