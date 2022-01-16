import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { DetailsContentComponent } from './components/details-content/details-content.component';
import { DetailsHeaderComponent } from './components/details-header/details-header.component';
import { DetailsSectionComponent } from './components/details-section/details-section.component';

@NgModule({
  declarations: [
    CardComponent,
    CardGridComponent,
    DetailsContentComponent,
    DetailsHeaderComponent,
    DetailsSectionComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardGridComponent,
    DetailsContentComponent,
    DetailsHeaderComponent,
    DetailsSectionComponent,
  ],
})
export class SharedModule {}
