import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, mergeMap, Observable, pipe, take, toArray } from 'rxjs';
import { Detail } from '../../../shared/components/details-content/details-content.component';
import { RandomImageService } from '../../../core/services/random-image.service';
import { SectionItem } from '../../../shared/components/details-section/details-section.component';
import { ExpandedFilm, ExpandedObject } from '../../model/film';
import { NavigationService } from '../../../core/services/navigation.service';

const attributeToTitle: { [key: string]: string } = {
  director: 'Director',
  producer: 'Producer',
  release_date: 'Release date',
};

function mapToSectionItem() {
  return pipe(
    map((expandedObject: ExpandedObject) => ({ text: expandedObject.name, id: expandedObject.id }))
  );
}

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent implements OnInit {
  film$?: Observable<ExpandedFilm>;

  characters$?: Observable<SectionItem[]>;
  planets$?: Observable<SectionItem[]>;

  details$?: Observable<Detail[]>;

  imageSrc?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private randomImageService: RandomImageService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.imageSrc = this.randomImageService.getRandomFilmImage();

    this.film$ = this.activatedRoute.data.pipe(map((data) => data['film']));

    this.details$ = this.film$.pipe(
      take(1),
      mergeMap((film) => Object.entries(film)),
      filter(([key]) => !!attributeToTitle[key]),
      map(([key, value]) => ({ title: attributeToTitle[key], text: value as string })),
      toArray()
    );

    this.characters$ = this.film$.pipe(
      take(1),
      mergeMap((film) => film.characters),
      mapToSectionItem(),
      toArray()
    );

    this.planets$ = this.film$.pipe(
      take(1),
      mergeMap((film) => film.planets),
      mapToSectionItem(),
      toArray()
    );
  }

  navigateToPerson(personId: string) {
    this.navigationService.navigateToPerson(personId);
  }

  navigateToPlanet(planetId: string) {
    this.navigationService.navigateToPlanet(planetId);
  }
}
