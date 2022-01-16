import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';

@NgModule({
  declarations: [CardComponent, CardGridComponent],
  imports: [CommonModule],
  exports: [CardGridComponent],
})
export class SharedModule {}
