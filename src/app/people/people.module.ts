import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';



@NgModule({
  declarations: [
    PeopleComponent,
    PersonDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
