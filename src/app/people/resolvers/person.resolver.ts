import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ExpandedPerson } from '../model/person';
import { PeopleService } from '../services/people.service';

@Injectable({
  providedIn: 'root',
})
export class PersonResolver implements Resolve<ExpandedPerson> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ExpandedPerson> {
    const id = route.paramMap.get('id');

    if (id) {
      return this.peopleService.getPerson(id);
    }

    return Promise.reject();
  }
}
