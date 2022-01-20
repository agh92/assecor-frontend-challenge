import { Injectable } from '@angular/core';
import { SwapyResource, SwapyService } from '../../core/services/swapy.service';
import { ExpandedFilm, ExpandedPlanet, ExpandedResident, Planet } from '../model/planet';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private swapyService: SwapyService) {}

  allPlanets$(): Observable<Planet[]> {
    return this.swapyService.getResource$<Planet>(SwapyResource.Planets);
  }

  async getPlanet(id: string): Promise<ExpandedPlanet> {
    const planet = await firstValueFrom(
      this.swapyService.getElement$<Planet>(SwapyResource.Planets, id)
    );

    const films = await this.swapyService.getElements<ExpandedFilm>(planet.films);
    const residents = await this.swapyService.getElements<ExpandedResident>(planet.residents);

    return { ...planet, films, residents };
  }
}
