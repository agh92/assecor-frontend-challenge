import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { PeopleService } from '../services/people.service';

@Injectable({
  providedIn: 'root',
})
export class PeopleResolver implements Resolve<Person[]> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person[]> {
    return this.peopleService.allPeople$();
  }
}
