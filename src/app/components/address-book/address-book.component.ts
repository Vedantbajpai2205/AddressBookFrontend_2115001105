import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  isFormVisible = false;
  personList = [
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

  selectedPerson: any = null;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Show Form
  showForm() {
    this.isFormVisible = true;
    this.selectedPerson = null; // Reset selected person when showing form for new person
  }

  // Hide Form
  hideForm() {
    this.isFormVisible = false;
  }

  // Add New Person
  addPerson(newPerson: any) {
    if (this.selectedPerson) {
      // Update existing person
      const index = this.personList.findIndex(person => person.id === this.selectedPerson.id);
      if (index !== -1) {
        this.personList[index] = newPerson;
      }
    } else {
      // Add new person
      this.personList.push(newPerson);
    }
    this.hideForm();
  }

  // Edit Person
  editPerson(person: any) {
    this.selectedPerson = { ...person }; // Clone the person object to avoid direct mutation
    this.isFormVisible = true;
  }

  // Delete Person
  deletePerson(id: number) {
    this.personList = this.personList.filter(person => person.id !== id);
  }
}
