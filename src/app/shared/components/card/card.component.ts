import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Card {
  id: string;
  title: string;
  imageSrc: string;
  details1: string | number;
  details2: string;
  details3: string | number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card?: Card;

  @Output() selected = new EventEmitter<string>();

  clicked() {
    this.selected.emit(this.card?.id);
  }
}
