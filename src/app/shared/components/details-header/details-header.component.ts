import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss'],
})
export class DetailsHeaderComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() hint?: string;
}
