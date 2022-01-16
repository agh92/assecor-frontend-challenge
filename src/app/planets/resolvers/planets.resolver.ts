import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from '../model/planet';
import { PlanetsService } from '../services/planets.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetsResolver implements Resolve<Planet[]> {
  constructor(private planetService: PlanetsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Planet[]> {
    return this.planetService.allPlanets$();
  }
}
