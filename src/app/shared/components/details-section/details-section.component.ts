import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface SectionItem {
  id: string;
  text: string;
}

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss'],
})
export class DetailsSectionComponent {
  @Input() title?: string;
  @Input() items?: SectionItem[] | null;

  @Output() itemSelected = new EventEmitter<string>();

  selected(id: string) {
    this.itemSelected.emit(id);
  }
}
