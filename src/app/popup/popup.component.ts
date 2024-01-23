import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  constructor(private router:Router){}
  
  selected = 0;
  inspectionTypes: any[] = [
    {inspection_type_id: 1, description: 'Contact Information'},
    {inspection_type_id: 2, description: 'Bank Information'},
    {inspection_type_id: 3, description: 'Payment references'},
    {inspection_type_id: 4, description: 'Ownership Details'},
    {inspection_type_id: 5, description: 'Payment History'},
    {inspection_type_id: 6, description: 'Portal Tickets'},
    {inspection_type_id: 7, description: 'Documents'},
    {inspection_type_id: 8, description: 'Forms'},
    {inspection_type_id: 8, description: '1099'},
    {inspection_type_id: 8, description: 'Sign out'},
  ];
  
  onSelectionChange() {
    // Navigate to the contact information component
    this.router.navigate(['/contact-information']);
  }
}
