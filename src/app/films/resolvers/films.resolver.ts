import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from '../model/film';
import { FilmsService } from '../services/films.service';

@Injectable({
  providedIn: 'root',
})
export class FilmsResolver implements Resolve<Film[]> {
  constructor(private filmService: FilmsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film[]> {
    return this.filmService.allFilms$();
  }
}
