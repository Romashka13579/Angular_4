import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const heroes = [
      { id: 1, name: 'Romashka' },
      { id: 2, name: 'Blast' },
      { id: 3, name: 'Slitz' },
      { id: 4, name: 'Magma' },
      { id: 5, name: 'Flash' },
      { id: 6, name: 'Bullet' },
      { id: 7, name: 'Lava' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
