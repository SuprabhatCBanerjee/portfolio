import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home-component/home-component'; 
import { AboutComponent } from '../about-component/about-component';
import { EducationComponent } from '../education-component/education-component';
import { SkillComponent } from '../skill-component/skill-component';
import { ProjectComponent } from '../project-component/project-component';

@Component({
  selector: 'app-wrapper-component',
  imports: [CommonModule, HomeComponent, AboutComponent, EducationComponent, SkillComponent, ProjectComponent ],
  templateUrl: './wrapper-component.html',
  styleUrl: './wrapper-component.css',
})
export class WrapperComponent {

}
