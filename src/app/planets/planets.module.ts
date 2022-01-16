import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  declarations: [PlanetsComponent, PlanetDetailsComponent],
  imports: [CommonModule, PlanetsRoutingModule],
})
export class PlanetsModule {}
