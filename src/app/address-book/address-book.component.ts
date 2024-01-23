import { Component } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent {
  countries: string[] = ['India', 'United Kingdom', 'USA', 'Australia'];
  states: string[]=['Tamilnadu'] 
  formData = {
    name1: '',
    name2:'',
    name3:'',
    name4:'',
    email: '',
    selectedCountry: '',
    address:'',
    city:'',
    zipcode:'',
    selectedState:'',
    contactNo:'',
  };

  onSubmit() {
    console.log('Form Data:', this.formData);
   
  }
}
