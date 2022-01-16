import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../card/card.component';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent {
  addCard: Card = { imageSrc: 'assets/icons/add.svg', title: 'Add new', showMoreNotice: false };

  @Input() title?: string;
  @Input() cards?: Card[] | null;

  @Output() cardSelected = new EventEmitter<string>();
  @Output() addNew = new EventEmitter<void>();

  selected(id: string) {
    this.cardSelected.emit(id);
  }

  addNewSelected() {
    this.addNew.emit();
  }
}
