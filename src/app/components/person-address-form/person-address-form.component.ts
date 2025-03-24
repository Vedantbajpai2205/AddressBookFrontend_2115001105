import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-person-address-form',
  templateUrl: './person-address-form.component.html',
  styleUrls: ['./person-address-form.component.scss']
})
export class PersonAddressFormComponent implements OnChanges {
  @Input() person: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  // New Person Data
  newPerson = {
    id: 0,
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: ''
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes.person && changes.person.currentValue) {
      this.newPerson = { ...changes.person.currentValue };
    } else {
      this.resetForm();
    }
  }

  // Reset Form
  resetForm() {
    this.newPerson = {
      id: 0,
      fullName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: ''
    };
  }

  // Handle Input Change
  onInputChange(event: any, field: string) {
    this.newPerson[field] = event.target.value;
  }

  // Save Form Data
  onSave() {
    if (this.newPerson.fullName && this.newPerson.address) {
      if (!this.newPerson.id) {
        this.newPerson.id = new Date().getTime(); 
      }
      this.save.emit(this.newPerson);
    } else {
      alert('Please fill all required fields.');
    }
  }

  // Cancel Form
  onCancel() {
    this.cancel.emit();
  }

  // Reset Form Fields
  onReset() {
    this.resetForm();
  }
}
