import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonResolver } from './resolvers/person.resolver';
import { PeopleResolver } from './resolvers/people.resolver';

const routes: Routes = [
  { path: '', component: PeopleComponent, resolve: { people: PeopleResolver } },
  {
    path: ':id',
    component: PersonDetailsComponent,
    resolve: { person: PersonResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
