import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actor } from '../models/actor.model';

@Injectable()
export class ActorsListService {

  constructor() { }

  private actors: Actor[] = [
    {
      id: '1',
      name: 'Aamir Khan',
      age: 57
    },
    {
      id: '2',
      name: 'Salman Khan',
      age: 56
    },
    {
      id: '3',
      name: 'Tiger Shroff',
      age: 32
    }
  ];

  public getActors(): Observable<Actor[]> {
    return of(this.actors);
  }

}