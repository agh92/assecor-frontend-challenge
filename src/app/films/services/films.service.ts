import { Injectable } from '@angular/core';
import { SwapyResource, SwapyService } from '../../core/services/swapy.service';
import { firstValueFrom, Observable } from 'rxjs';
import { ExpandedFilm, ExpandedObject, Film } from '../model/film';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private swapyService: SwapyService) {}

  allFilms$(): Observable<Film[]> {
    return this.swapyService.getResource$<Film>(SwapyResource.Films);
  }

  async getFilm(id: string): Promise<ExpandedFilm> {
    const film = await firstValueFrom(this.swapyService.getElement$<Film>(SwapyResource.Films, id));

    const planets = await this.swapyService.getElements<ExpandedObject>(film.planets);
    const characters = await this.swapyService.getElements<ExpandedObject>(film.characters);

    return { ...film, planets, characters };
  }
}
