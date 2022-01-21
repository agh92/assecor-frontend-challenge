import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent, ModalComponentOptions } from '../components/form/form.component';

const FILM_FORM: ModalComponentOptions = {
  title: 'Add Film',
  groups: [
    [{ label: 'Title', type: 'input', extra: 'Add title' }],
    [{ label: 'Director', type: 'input', extra: 'Add director' }],
    [
      {
        label: 'Producer',
        type: 'dropdown',
        extra: ['Gary Kurtz', 'Rick McCallum', 'Howard G. Kazanjian', 'George Lucas'],
      },
    ],
    [{ label: 'Release date', type: 'input', extra: 'YYYY' }],
    [{ label: 'Description', type: 'textArea', extra: 'Description' }],
  ],
};

const PERSON_FORM: ModalComponentOptions = {
  title: 'Add Person',
  groups: [
    [{ label: 'Name', type: 'input', extra: 'Add name' }],
    [
      { label: 'Height', type: 'input', extra: 'Meters' },
      { label: 'Weight', type: 'input', extra: 'Kg' },
    ],
    [
      { label: 'Hair color', type: 'input', extra: 'Hair color' },
      {
        label: 'Eye color',
        type: 'dropdown',
        extra: ['red', 'blue', 'green', 'yellow', 'brown'],
      },
    ],
    [
      { label: 'Birth year', type: 'input', extra: 'YYYY' },
      { label: 'Gender', type: 'dropdown', extra: ['female', 'male', 'n/a'] },
    ],
  ],
};

const PLANET_FORM: ModalComponentOptions = {
  title: 'Add Planet',
  groups: [
    [{ label: 'Name', type: 'input', extra: 'Add name' }],
    [
      {
        label: 'Type',
        type: 'dropdown',
        extra: ['desert', 'grasslands', 'mountains', ' tundra, ice caves'],
      },
    ],
    [
      {
        label: 'Created by',
        type: 'dropdown',
        extra: ['George Lucas', 'Irvin Kershner', 'Richard Marquand'],
      },
    ],
    [{ label: 'Genre', type: 'input', extra: 'science fiction' }],
    [{ label: 'Race', type: 'textArea', extra: 'Races separated by semi-colon' }],
  ],
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private ngbModalService: NgbModal) {}

  public openFilmForm() {
    this.openModal(FILM_FORM);
  }

  public openPersonForm() {
    this.openModal(PERSON_FORM);
  }

  public openPlanetForm() {
    this.openModal(PLANET_FORM);
  }

  private openModal(inputs: ModalComponentOptions) {
    const modalRef = this.ngbModalService.open(FormComponent, {
      backdropClass: 'blur-background',
      centered: true,
      backdrop: true,
    });

    (modalRef.componentInstance as FormComponent).options = inputs;
  }
}
