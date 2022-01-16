import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomImageService } from '../services/random-image.service';
import { map, mergeMap, Observable, pipe, take, toArray } from 'rxjs';
import { Card } from '../shared/components/card/card.component';
import { Person } from './model/person';
import { NavigationService } from '../services/navigation.service';

function mapPeopleToCard(getImage: () => string) {
  return pipe(
    map((person: Person) => {
      return {
        id: person.id!,
        imageSrc: getImage(),
        title: person.name,
        details1: `Birth year: ${person.birth_year}`,
        details2: `Eye color: ${person.eye_color}`,
        details3: `Height: ${person.height} cm`,
      };
    })
  );
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent implements OnInit {
  people$?: Observable<Card[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private randomImageService: RandomImageService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.people$ = this.route.data.pipe(
      map((data) => data['people'] as Person[]),
      take(1),
      mergeMap((people) => people),
      mapPeopleToCard(() => this.randomImageService.getRandomPersonImage()),
      toArray()
    );
  }

  goToOverview(id: string) {
    this.navigationService.navigateToPerson(id);
  }
}
