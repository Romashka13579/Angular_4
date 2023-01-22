import { Component } from '@angular/core';
import { Hero } from '../hero';
import { listOfHeroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = listOfHeroes;

  selectedHero?:Hero;

  Select(hero:Hero): void{
    this.selectedHero = hero;
  }
}
