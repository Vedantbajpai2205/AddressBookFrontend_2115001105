import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
    @Output() addNew = new EventEmitter<void>();
    @Output() editPerson = new EventEmitter<any>();
    @Output() deletePerson = new EventEmitter<number>();
    @Input() personList: any[] = [
        {
            id: 1,
            fullName: 'Vedant Bajpai',
            address: 'A1',
            city: 'Kanpur',
            state: 'Uttar Pradesh',
            zipCode: '208005',
            phoneNumber: '08004842990'
        },
        {
            id: 2,
            fullName: 'Suyash Singh',
            address: 'Sector 1',
            city: 'Delhi',
            state: 'Delhi',
            zipCode: '400003',
            phoneNumber: '01223420607'
        }
    ];

    // Edit Person
    onEdit(person: any) {
      this.editPerson.emit(person);
  }

  // Delete Person
  onDelete(id: number) {
      this.deletePerson.emit(id);
  }

    // Emit Event for Showing Form
    showForm() {
        this.addNew.emit();
    }
}
