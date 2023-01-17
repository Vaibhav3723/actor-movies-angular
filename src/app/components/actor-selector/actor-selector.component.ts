import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Actor } from '../../models/actor.model';
import { ActorsListService } from '../../services/actors-list.service';
import { MoviesDataService } from '../../services/movies-data.service';

@Component({
  selector: 'actor-selector',
  templateUrl: './actor-selector.component.html',
  styleUrls: ['./actor-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorSelectorComponent implements OnInit {
  _actors$: Observable<Actor[]> = this.actorDataService.getActors().pipe(
    map((actors) => {
      return actors.filter((actor) => actor.age > 35);
    })
  );

  constructor(
    private actorDataService: ActorsListService,
    private moviesDataService: MoviesDataService,
  ) {}

  ngOnInit() {}

  filterMovie(event) {
    this.moviesDataService.setActorSelection(event.target.value);
  }
}
