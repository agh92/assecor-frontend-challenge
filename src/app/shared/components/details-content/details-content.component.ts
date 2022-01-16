import { Component, Input } from '@angular/core';

export interface Detail {
  title: string;
  text: string;
}

@Component({
  selector: 'app-details-content',
  templateUrl: './details-content.component.html',
  styleUrls: ['./details-content.component.scss'],
})
export class DetailsContentComponent {
  @Input() description?: string;
  @Input() imageSrc?: string;
  @Input() details?: Detail[] | null;
}
