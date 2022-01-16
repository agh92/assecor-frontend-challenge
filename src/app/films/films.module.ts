import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmsRoutingModule } from './films-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FilmsComponent, FilmDetailsComponent],
  imports: [CommonModule, FilmsRoutingModule, SharedModule],
})
export class FilmsModule {}
