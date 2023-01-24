import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { listOfHeroes } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(listOfHeroes);
    return heroes;
  }

  constructor() { }
}
