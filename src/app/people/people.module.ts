import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PeopleComponent, PersonDetailsComponent],
  imports: [CommonModule, PeopleRoutingModule, SharedModule],
})
export class PeopleModule {}
