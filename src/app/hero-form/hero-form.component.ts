import { Component } from '@angular/core';
import { HeroInfo } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  model = new HeroInfo(18, 'Mike', 'Dr. IQ', 'Super brain', 'wind');

  submitted = false;

  onSubmit() { this.submitted = true; }
}
