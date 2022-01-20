import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../components/form/form.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private ngbModalService: NgbModal) {}

  public openFilmForm() {
    this.openModal();
  }

  public openPersonForm() {
    this.openModal();
  }

  public openPlanetForm() {
    this.openModal();
  }

  private openModal() {
    this.ngbModalService.open(FormComponent);
  }
}
