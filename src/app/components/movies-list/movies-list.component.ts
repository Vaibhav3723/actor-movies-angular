import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movies.model';
import { MoviesDataService } from '../../services/movies-data.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent implements OnInit {
  _movies$: Observable<Movie[]> = this.moviesDataService.getMoviesData();

  constructor(private moviesDataService: MoviesDataService) {}

  ngOnInit() {
    this.moviesDataService.getActorSelection().subscribe((res) => {
      if (res) {
        this._movies$ = this.moviesDataService.filterMovie(res);
        console.log(this._movies$);
      }
    });
  }
}
