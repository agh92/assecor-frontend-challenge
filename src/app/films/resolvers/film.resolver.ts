import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ExpandedFilm } from '../model/film';
import { FilmsService } from '../services/films.service';

@Injectable({
  providedIn: 'root',
})
export class FilmResolver implements Resolve<ExpandedFilm> {
  constructor(private filmService: FilmsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ExpandedFilm> {
    const id = route.paramMap.get('id');

    return id ? this.filmService.getFilm(id) : Promise.reject();
  }
}
