import { Component, OnInit } from '@angular/core';
import { filter, map, mergeMap, Observable, take, toArray } from 'rxjs';
import { ExpandedPlanet } from '../../model/planet';
import { SectionItem } from '../../../shared/components/details-section/details-section.component';
import { Detail } from '../../../shared/components/details-content/details-content.component';
import { RandomImageService } from '../../../core/services/random-image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../../../core/services/navigation.service';
import { ModalService } from '../../../core/services/modal.service';

const attributeToTitle: { [k: string]: string } = {
  population: 'Population',
  surface_water: 'Surface water',
  terrain: 'Terrain',
  gravity: 'Gravity',
  climate: 'Climate',
  diameter: 'Diameter',
};

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
})
export class PlanetDetailsComponent implements OnInit {
  planet$?: Observable<ExpandedPlanet>;

  residents$?: Observable<SectionItem[]>;
  films$?: Observable<SectionItem[]>;

  details$?: Observable<Detail[]>;

  imageSrc?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private randomImageService: RandomImageService,
    private navigationService: NavigationService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.imageSrc = this.randomImageService.getRandomPlanetImage();

    this.planet$ = this.activatedRoute.data.pipe(map((data) => data['planet']));

    this.details$ = this.planet$.pipe(
      take(1),
      mergeMap((planet) => Object.entries(planet)),
      filter(([key]) => !!attributeToTitle[key]),
      map(([key, value]) => ({ title: attributeToTitle[key], text: value as string })),
      toArray()
    );

    this.residents$ = this.planet$.pipe(
      take(1),
      mergeMap((planet) => planet.residents),
      map((resident) => ({ text: resident.name, id: resident.id })),
      toArray()
    );

    this.films$ = this.planet$.pipe(
      take(1),
      mergeMap((planet) => planet.films),
      map((film) => ({ text: film.title, id: film.id })),
      toArray()
    );
  }

  navigateToFilm(filmId: string) {
    this.navigationService.navigateToFilm(filmId);
  }

  navigateToPerson(personId: string) {
    this.navigationService.navigateToPerson(personId);
  }

  addNewPerson() {
    this.modalService.openPersonForm();
  }

  addNewFilm() {
    this.modalService.openFilmForm();
  }
}
