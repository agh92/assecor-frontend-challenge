import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  declarations: [FilmsComponent, FilmDetailsComponent],
  imports: [CommonModule, FilmsRoutingModule],
})
export class FilmsModule {}
