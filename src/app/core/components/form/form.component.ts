import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface FormInput {
  label: string;
  type: 'input' | 'textArea' | 'dropdown';
  /**
   * For type input and textArea the expected extra is a string with the hint
   * For dropdown type the expected extra is an array of strings with the options
   */
  extra: string | string[];
}

export interface ModalComponentOptions {
  title: string;
  /**
   * The first dimension of the array represents the groups - a row inside the form
   * the second dimension the children of a group - the items inside the row
   */
  groups: FormInput[][];
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() options?: ModalComponentOptions;

  constructor(public modalRef: NgbActiveModal) {}

  isInput(input: FormInput) {
    return input.type === 'input';
  }

  isTextArea(input: FormInput) {
    return input.type === 'textArea';
  }

  isDropDown(input: FormInput) {
    return input.type === 'dropdown';
  }

  getDropDownExtra(input: FormInput) {
    return input.extra as string[];
  }

  closeModal(event: Event) {
    event.preventDefault();
    this.modalRef.close();
  }
}
