import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetResolver } from './resolvers/planet.resolver';
import { PlanetsResolver } from './resolvers/planets.resolver';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    resolve: { planets: PlanetsResolver },
  },
  {
    path: ':id',
    component: PlanetDetailsComponent,
    resolve: { planet: PlanetResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
