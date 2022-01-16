import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';



@NgModule({
  declarations: [
    FilmsComponent,
    FilmDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilmsModule { }
