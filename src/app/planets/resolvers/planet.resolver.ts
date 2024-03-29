import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ExpandedPlanet } from '../model/planet';
import { PlanetsService } from '../services/planets.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetResolver implements Resolve<ExpandedPlanet> {
  constructor(private planetService: PlanetsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ExpandedPlanet> {
    const id = route.paramMap.get('id');

    return id ? this.planetService.getPlanet(id) : Promise.reject();
  }
}
