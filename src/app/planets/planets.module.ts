import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';



@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanetsModule { }
