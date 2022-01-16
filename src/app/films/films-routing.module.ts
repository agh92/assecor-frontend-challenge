import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmResolver } from './resolvers/film.resolver';
import { FilmsResolver } from './resolvers/films.resolver';

const routes: Routes = [
  { path: '', component: FilmsComponent, resolve: { films: FilmsResolver } },
  {
    path: ':id',
    component: FilmDetailsComponent,
    resolve: { film: FilmResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
