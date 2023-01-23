import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { listOfHeroes } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[]{
    return listOfHeroes;
  }

  constructor() { }
}
