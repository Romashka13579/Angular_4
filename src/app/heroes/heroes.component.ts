import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  constructor(private heroService:HeroService, private messagesService:MessagesService){}

  heroes: Hero[] = [];

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // selectedHero?:Hero;

  // Select(hero:Hero): void{
  //   this.selectedHero = hero;
  //   this.messagesService.add(`Selected hero id = ${hero.id}`);
  // }

  ngOnInit(){
    this.getHeroes();
  }
}
