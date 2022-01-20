import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, mergeMap, Observable, take, toArray } from 'rxjs';
import { ExpandedPerson } from '../../model/person';
import { Detail } from '../../../shared/components/details-content/details-content.component';
import { SectionItem } from '../../../shared/components/details-section/details-section.component';
import { RandomImageService } from '../../../core/services/random-image.service';
import { NavigationService } from '../../../core/services/navigation.service';

const attributeToTitle: { [k: string]: string } = {
  height: 'Height',
  mass: 'Mass',
  hair_color: 'Hair color',
  birth_year: 'Birth year',
  gender: 'Gender',
  eye_color: 'Eye color',
};

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
  people$?: Observable<ExpandedPerson>;

  imageSrc?: string;

  details$?: Observable<Detail[]>;
  films$?: Observable<SectionItem[]>;
  home$?: Observable<SectionItem[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private randomImageService: RandomImageService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.imageSrc = this.randomImageService.getRandomPersonImage();

    this.people$ = this.activatedRoute.data.pipe(map((data) => data['person']));

    this.details$ = this.people$.pipe(
      take(1),
      mergeMap((people) => Object.entries(people)),
      filter(([key]) => !!attributeToTitle[key]),
      map(([key, value]) => ({ title: attributeToTitle[key], text: value as string })),
      toArray()
    );

    this.films$ = this.people$.pipe(
      take(1),
      mergeMap((film) => film.films),
      map((film) => ({ text: film.title, id: film.id })),
      toArray()
    );

    this.home$ = this.people$.pipe(
      map((film) => film.homeworld),
      map((homeWorld) => [{ text: homeWorld.name, id: homeWorld.id }])
    );
  }

  navigateToFilm(filmId: string) {
    this.navigationService.navigateToFilm(filmId);
  }

  navigateToPlanet(planetId: string) {
    this.navigationService.navigateToPlanet(planetId);
  }
}
