import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

const tabs = ['home', 'films', 'people', 'planets'];
export type Tab = 'home' | 'films' | 'people' | 'planets';

function isTab(tab: string): tab is Tab {
  return tabs.includes(tab);
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navigationEndEvents$: Observable<NavigationEnd>;

  constructor(private router: Router) {
    this.navigationEndEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  public get selectedTab$(): Observable<Tab> {
    return this.navigationEndEvents$.pipe(
      map((event) => event.url),
      map((url) => url.split('/')[1]),
      filter((rootPath) => isTab(rootPath))
    ) as Observable<Tab>;
  }
}
