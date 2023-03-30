import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { listOfHeroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messagesService:MessagesService){}

  getHeroes(): Observable<Hero[]>{
    this.messagesService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = listOfHeroes.find(h => h.id === id)!;
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  private log(message: string) {
    this.messagesService.add(`HeroService: ${message}`);
  }

  private heroesUrl = 'api/heroes';
}
