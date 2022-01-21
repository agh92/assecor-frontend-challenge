import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ExpandedPerson } from '../model/person';
import { PeopleService } from '../services/people.service';

@Injectable({
  providedIn: 'root',
})
export class PersonResolver implements Resolve<ExpandedPerson> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ExpandedPerson> {
    const id = route.paramMap.get('id');

    return id ? this.peopleService.getPerson(id) : Promise.reject();
  }
}
