import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { Movie } from '../models/movies.model';

@Injectable()
export class MoviesDataService {
  constructor() {}

  actorSelection = new BehaviorSubject('');

  getActorSelection() {
    return this.actorSelection.asObservable();
  }

  setActorSelection(value) {
    this.actorSelection.next(value);
  }

  private Movies: Movie[] = [
    {
      id: '1',
      actorId: '1',
      name: '3 Idiots',
      rating: 8.4,
    },
    {
      id: '1',
      actorId: '1',
      name: 'Talaash',
      rating: 2,
    },
    {
      id: '2',
      actorId: '2',
      name: 'Bajranji Bhaijan',
      rating: 3.1,
    },
    {
      id: '2',
      actorId: '2',
      name: 'Tere Naam',
      rating: 4.5,
    },
    {
      id: '2',
      actorId: '2',
      name: 'Andaz Apna Apna',
      rating: 8.1,
    },
    {
      id: '3',
      actorId: '3',
      name: 'Heropanti',
      rating: 3.5,
    },
  ];

  public getMoviesData(): Observable<Movie[]> {
    return of(this.Movies);
  }

  filterMovie(id: string): Observable<Movie[]> {
    return of(this.Movies.filter((movie) => movie.id === id));
  }
}
