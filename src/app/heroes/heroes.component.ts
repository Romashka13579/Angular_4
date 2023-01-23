import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  constructor(private heroService:HeroService){}

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  heroes: Hero[] = [];

  selectedHero?:Hero;

  Select(hero:Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(){
    this.getHeroes();
  }
}
