import { Component, OnInit } from '@angular/core';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  showMobileMenu = false;

  currentIcon = faBars;
  faBars = faBars;
  faTimes = faTimes;

  isFilmsSelected$?: Observable<boolean>;
  isPeopleSelected$?: Observable<boolean>;
  isPlanetsSelected$?: Observable<boolean>;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.isFilmsSelected$ = this.navService.selectedTab$.pipe(
      map((selectedTab) => selectedTab === 'films')
    );

    this.isPeopleSelected$ = this.navService.selectedTab$.pipe(
      map((selectedTab) => selectedTab === 'people')
    );

    this.isPlanetsSelected$ = this.navService.selectedTab$.pipe(
      map((selectedTab) => selectedTab === 'planets')
    );
  }

  toggleNavMenuIcon() {
    if (this.currentIcon === faBars) {
      this.showMobileMenu = true;
      this.currentIcon = faTimes;
    } else {
      this.showMobileMenu = false;
      this.currentIcon = faBars;
    }
  }
}
