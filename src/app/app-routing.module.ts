import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'planets',
    loadChildren: () => import('./planets/planets.module').then((m) => m.PlanetsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
