import { Injectable } from '@angular/core';
import { SwapyResource, SwapyService } from '../../core/services/swapy.service';
import { firstValueFrom, Observable } from 'rxjs';
import { ExpandedFilm, ExpandedPerson, ExpandedHomeworld, Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private swapyService: SwapyService) {}

  allPeople$(): Observable<Person[]> {
    return this.swapyService.getResource$<Person>(SwapyResource.People);
  }

  async getPerson(id: string): Promise<ExpandedPerson> {
    const person = await firstValueFrom(
      this.swapyService.getElement$<Person>(SwapyResource.People, id)
    );

    const homeworld = await this.swapyService.getElements<ExpandedHomeworld>([person.homeworld]);
    const films = await this.swapyService.getElements<ExpandedFilm>(person.films);

    return { ...person, homeworld: homeworld[0], films };
  }
}
