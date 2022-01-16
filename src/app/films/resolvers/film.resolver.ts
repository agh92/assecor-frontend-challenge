import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ExpandedFilm } from '../model/film';
import { FilmsService } from '../services/films.service';

@Injectable({
  providedIn: 'root',
})
export class FilmResolver implements Resolve<ExpandedFilm> {
  constructor(private filmService: FilmsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ExpandedFilm> {
    const id = route.paramMap.get('id');

    if (id) {
      return this.filmService.getFilm(id);
    }

    return Promise.reject();
  }
}
