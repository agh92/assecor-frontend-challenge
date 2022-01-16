import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, Observable, pipe, take, toArray } from 'rxjs';
import { Card } from '../shared/components/card/card.component';
import { RandomImageService } from '../services/random-image.service';
import { Film } from './model/film';
import { NavigationService } from '../services/navigation.service';

function mapFilmToCard(getImage: () => string) {
  return pipe(
    map((film: Film) => {
      return {
        id: film.id!,
        imageSrc: getImage(),
        title: film.title,
        details1: `Director: ${film.director}`,
        details2: `Producer: ${film.producer}`,
        details3: `Released: ${film.release_date}`,
      } as Card;
    })
  );
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
})
export class FilmsComponent implements OnInit {
  films$?: Observable<Card[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private randomImageService: RandomImageService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.films$ = this.route.data.pipe(
      map((data) => data['films'] as Film[]),
      take(1),
      mergeMap((films) => films),
      mapFilmToCard(() => this.randomImageService.getRandomFilmImage()),
      toArray()
    );
  }

  goToOverview(id: string) {
    this.navigationService.navigateToFilm(id);
  }
}
