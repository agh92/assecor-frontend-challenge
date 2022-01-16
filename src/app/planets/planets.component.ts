import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable, pipe, take, toArray } from 'rxjs';
import { Card } from '../shared/components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomImageService } from '../services/random-image.service';
import { Planet } from './model/planet';
import { NavigationService } from '../services/navigation.service';

function mapPlanetToCard(getImage: () => string) {
  return pipe(
    map((planet: Planet) => {
      return {
        id: planet.id!,
        imageSrc: getImage(),
        title: planet.name,
        details1: `Population: ${planet.population}`,
        details2: `Terrain: ${planet.terrain}`,
        details3: `Diameter: ${planet.diameter}`,
        showMoreNotice: true,
      };
    })
  );
}

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
})
export class PlanetsComponent implements OnInit {
  planets$?: Observable<Card[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private randomImageService: RandomImageService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.planets$ = this.route.data.pipe(
      map((data) => data['planets'] as Planet[]),
      take(1),
      mergeMap((planets) => planets),
      mapPlanetToCard(() => this.randomImageService.getRandomPlanetImage()),
      toArray()
    );
  }

  goToOverview(id: string) {
    this.navigationService.navigateToPlanet(id);
  }
}
